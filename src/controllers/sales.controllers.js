const {SalesServices} = require('../services')


const getSales = async (req, res, next) => {
    try {
        const result = await SalesServices.salesGet();
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "No se obtuvieron datos"
        })
    }
}
const getSale = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const result = await SalesServices.saleGet(id, body);
        res.status(200).json(result);
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "No se obtuvieron datos"
        })
    }
}
const createSale = async (req, res, next) => {
    try {
        const newSale = req.body;
        const result = await SalesServices.salePost(newSale);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos"
        })
    }
}
const updateSale = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body
        const result = await SalesServices.salePatch(id, body);
        res.json({message: "Datos actualizados con éxito", result});
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Actualización de datos fallida"
        })
    }
}
const deleteSale = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await SalesServices.saleDelete(id);
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
    getSales,
    getSale,
    createSale,
    updateSale,
    deleteSale
}