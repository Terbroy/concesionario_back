const {PriceServices} = require('../services')


const getPrices = async (req, res, next) => {
    try {
        const result = await PriceServices.pricesGet();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "No se obtuvieron datos"
        })
    }
}
const getPrice = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const result = await PriceServices.priceGet(id, body);
        res.status(200).json(result);
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "No se obtuvieron datos"
        })
    }
}
const createPrice = async (req, res, next) => {
    try {
        const newPrice = req.body;
        const result = await PriceServices.pricePost(newPrice);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos"
        })
    }
}
const updatePrice = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body
        const result = await PriceServices.pricePatch(id, body);
        res.json({message: "Datos actualizados con éxito", result});
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Actualización de datos fallida"
        })
    }
}
const deletePrice = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await PriceServices.priceDelete(id);
        res.json({message: "Datos eliminados con éxito", result});
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Eliminación de datos fallida"
        })
    }
}


module.exports = {
    getPrices,
    getPrice,
    createPrice,
    updatePrice,
    deletePrice
}