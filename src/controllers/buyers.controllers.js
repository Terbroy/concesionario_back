const {BuyersServices} = require('../services')


const getBuyers = async (req, res, next) => {
    try {
        const result = await BuyersServices.buyersGet();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "No se obtuvieron datos"
        })
    }
}
const getBuyer = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const result = await BuyersServices.buyerGet(id, body);
        res.status(200).json(result);
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "No se obtuvieron datos"
        })
    }
}
const updateBuyer = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body
        const result = await BuyersServices.buyerPatch(id, body);
        res.json({message: "Datos actualizados con éxito", result});
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Actualización de datos fallida"
        })
    }
}
const deleteBuyer = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await BuyersServices.buyerDelete(id);
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
    getBuyers,
    getBuyer,
    updateBuyer,
    deleteBuyer
}