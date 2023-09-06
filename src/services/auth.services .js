const { Users } = require("../models");
const bcypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

class AuthServices {
  static async auth(credentials) {
    try {
      const { email, password } = credentials
      const result = await Users.findOne({
        where: { email },
      });

      if(result){
        const isValid = bcypt.compareSync(password, result.password)
        return isValid ? {isValid, result} : isValid
      }else{
        return "contraseña invalida"
      }
    } catch (error) {
      throw error;
    }
  }

  static getToken(data){
    try {
      const token = jwt.sign(data, process.env.SECRET, {
        expiresIn:"1d",
        algorithm: "HS512"
      })
      return token
    } catch (error) {
      throw(error)
    }
  }

}



module.exports = AuthServices;