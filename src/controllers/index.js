const { getBuyers, getBuyer, updateBuyer, deleteBuyer } = require('./buyers.controllers');
const { getPrices, getPrice , createPrice, updatePrice, deletePrice } = require('./price.controllers');
const { getSales, getSale, createSale, updateSale, deleteSale } = require('./sales.controllers');
const { userRegister } = require('./users.controllers');
const { authUser } = require('./auth.controllers');
const { getVehicles,getVehicle, createVehicle, editVehicle, deleteVehicle, sellVehicle, sumVehicles } = require("./vehicles.controllers");


module.exports = {
    getBuyers, getBuyer, updateBuyer, deleteBuyer,
    getPrices, getPrice , createPrice, updatePrice, deletePrice,
    getSales, getSale, createSale, updateSale, deleteSale,
    userRegister,
    authUser,
    getVehicles,getVehicle, createVehicle, editVehicle, deleteVehicle, sellVehicle, sumVehicles
}