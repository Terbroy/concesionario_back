const { AuthServices } = require("../services");

const authUser = async ( req, res, next ) => {
    try {
        const credentials = req.body
        const result = await AuthServices.auth(credentials)

        if(result){
            const { email, id } = result.result 
            const user = {id, email}
            const token = AuthServices.getToken(user)
            user.token = token
            res.json({...user})
        }else{
            res.status(400).json({message: "Invalid info"})
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "incorrect credentials",
          });
    }
}

module.exports = {
    authUser
}
