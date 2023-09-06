const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     vehicles:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         tipo:
 *           type: string
 *           example: "carro"
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         color:
 *           type: string
 *           example: "Gray"
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         img:
 *           type: string
 *           example: "URL o ruta de la imagen"
 *         kilometraje:
 *           type: int
 *           example: 15000
 *         cilindraje:
 *           type: int
 *           example: 150
 *         numVelocidades:
 *           type: int
 *           example: 4
 *         precio:
 *           type: int
 *           example: 234000
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *     createVehicles:
 *       type: object
 *       properties:
 *         tipo:
 *           type: string
 *           example: "carro"
 *         modelo:
 *           type: string
 *           example: "2024 HR-V"
 *         color:
 *           type: string
 *           example: "Gray"
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         img:
 *           type: string
 *           example: "URL o ruta de la imagen"
 *         kilometraje:
 *           type: int
 *           example: 15000
 *         cilindraje:
 *           type: int
 *           example: 150
 *         numVelocidades:
 *           type: int
 *           example: 4
 *         precio:
 *           type: int
 *           example: 234000
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *     updateVehicles:
 *       type: object
 *       properties:
 *         color:
 *           type: string
 *           example: "Gray"
 *         esNuevo:
 *           type: boolean
 *           example: false
 *         img:
 *           type: string
 *           example: "URL o ruta de la imagen"
 *         kilometraje:
 *           type: int
 *           example: 15000
 *         cilindraje:
 *           type: int
 *           example: 150
 *         numVelocidades:
 *           type: int
 *           example: 4
 *         precio:
 *           type: int
 *           example: 234000
 *         fechaRegistro:
 *           type: string
 *           example: 01/01/2023
 *     suma:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         suma:
 *           type: int
 *           example: 340000
 *     realizarSuma:
 *       type: object
 *       properties:
 *         tipo:
 *           type: string
 *           example: "moto"
 *     deleteVehicles:
 *       type: object
 *       properties:
 *         message: 
 *           type: string
 *           example: Elemento eliminado correctamente
 */


const Vehicles = db.define('vehicles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  esNuevo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'URL o ruta de la imagen',
  },
  kilometraje: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: 'El kilometraje debe ser mayor o igual a 0.',
      },
    },
    comment: 'Valor mayor o igual a 0',
  },
  cilindraje: {
    type: DataTypes.INTEGER,
    validate: {
      min: {
        args: [0],
        msg: 'El cilindraje debe ser mayor o igual a 0.',
      },
      max: {
        args: [450],
        msg: 'El cilindraje máximo es 450.',
      },
    },
    comment: 'Capacidad de cilindraje de la moto (máximo 450)',
  },

  numVelocidades: {
    type: DataTypes.INTEGER,
    validate: {
      min: {
        args: [0],
        msg: 'El número de velocidades debe ser mayor o igual a 0.',
      },
      max: {
        args: [6],
        msg: 'El número máximo de velocidades es 6.',
      },
    },
    comment: 'Número de velocidades de la moto (máximo 6)',
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: [0],
        msg: 'El precio debe ser mayor o igual a 0.',
      },
      max:{
        args: [250000000]
      }
    },
  },
  fechaRegistro: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
})


module.exports = Vehicles
