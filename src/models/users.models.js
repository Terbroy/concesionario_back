const bcrypt = require("bcrypt");
const db = require("../utils/database");
const { DataTypes } = require("sequelize");


/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         email:
 *           type: string
 *           example: empleado@sincoayf.com
 *         password:
 *           type: string
 *           example: 1234
 *     register:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: empleado@sincoayf.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *         id:
 *           type: number
 *           example: 1
 *         email:
 *           type: string
 *           example: empleado@sincoayf.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb3NlZGFuaWVsMzdAZ21haWwuY29tIiwiaWF0IjoxNjkzOTYyNzQzLCJleHAiOjE2OTQwNDkxNDN9.1o9_l6cN2kTDjzYD6m-G_QmDVLjV49UNuxDfpXAROmk5Mq-DjGBx9LJqJAJZ1aMCoS92XLy-A77yAKZaaPEfKw
 *     registerLogin:
 *         email:
 *           type: string
 *           example: empleado@sincoayf.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: Bearer
 *       bearerFormat: JWT
 */

const Users = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate:{
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
});
    
module.exports = Users;
    