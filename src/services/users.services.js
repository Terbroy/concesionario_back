const { Users } = require("../models");

class UsersServices {
  static async createUser(user) {
    try {
      
      const result = await Users.create(user);
      return result;
      
    } catch (error) {
      throw error;
    }
  }

  static async getUser(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "email", "password"]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;