const { UsersServices } = require("../services");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.createUser(newUser);
    res.status(201).json(result);
    
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Incomplete info",
    });
  }
};

module.exports = {
  userRegister,
};