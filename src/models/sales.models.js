const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Buyers = require("./buyers.models");

/**
 * @openapi
 * components:
 *   schemas:
 *     sales:
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
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *         buyerId:
 *           type: int
 *           example: 1
 *     createSales:
 *       type: object
 *       properties:
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         precio:
 *           type: int
 *           example: 234000
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 */

const Sales = db.define(
  "sales",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    esNuevo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true
    },
    fechaRegistro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "buyer_id",
      references: {
        model: Buyers
      }
    },
  }, {
    timestamps: true,
  }
);

module.exports = Sales;