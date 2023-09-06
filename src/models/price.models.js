const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     price:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         precio:
 *           type: int
 *           example: 234000
 *     createPrice:
 *       type: object
 *       properties:
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         precio:
 *           type: int
 *           example: 234000
 *     deletePrice:
 *       type: object
 *       properties:
 *         message: 
 *           type: string
 *           example: Elemento eliminado correctamente
 */


const Price = db.define(
  "price",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    timestamps: false,
  }
);

module.exports = Price;