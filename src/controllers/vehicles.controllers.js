const { VehiclesServices, BuyersServices, SalesServices } = require("../services");

const getVehicles = async (req, res, next) => {
    try {
        const result = await VehiclesServices.getAll();
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const getVehicle = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await VehiclesServices.get(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const createVehicle = async (req, res, next) => {
    try {
        const data = req.body
        const result = await VehiclesServices.create(data);
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const editVehicle = async (req, res, next) => {
    try {
        const { id } = req.params
        const body = req.body
        const result = await VehiclesServices.edit(id, body);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    }
}
const deleteVehicle = async (req, res, next)=> {
    try {
        const { id } = req.params
        const result = await VehiclesServices.delete(id);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    };
};
const sellVehicle = async (req, res, next)=> {
    try {
        const { id } = req.params
        const vehicle = await VehiclesServices.get(id);
        const {modelo, esNuevo, precio, fechaRegistro} = vehicle
        const vehicleId = id
        const newBuyer = req.body;
        const buyerCreated = await BuyersServices.buyerPost(newBuyer);
        
        if(buyerCreated && vehicle){
            const {id} = buyerCreated;
            const data = {
                buyerId: id,
                modelo,
                esNuevo, 
                precio,
                fechaRegistro
            }
            const result = await SalesServices.create(data)
            const vehicle = await VehiclesServices.delete(vehicleId);
            res.status(201).json(result);
        }

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    };
};

const sumVehicles = async (req, res, next)=> {
    try {
        const data = req.body
        const result = await VehiclesServices.getMatches(data);
        const sum = result.reduce((total, vehicle) => {
            return total + vehicle.precio;
          }, 0)
        res.status(200).json({sum, result});
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Can't find info"
        })
    };
};
module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  editVehicle,
  deleteVehicle,
  sellVehicle,
  sumVehicles
};