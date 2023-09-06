const { Sales } = require("../models");

class SalesServices {
    
    static async create (sale) {
        try {
            const result = await Sales.create(sale);
            return result
        } catch (error) {
            throw(error);
        };
    }

    static async salesGet() {
        try {
            const result = await Sales.findAll();
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async saleGet(id) {
        try {
            const result = await Sales.findOne({
                where: { id },
            });
            return result;
        } catch (error) {
            throw(error);
        };
    };

    static async salePatch (id, body) {
        try {
            const sale = await Sales.findOne({where: {id}});
            const result = await sale.update({...body});
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async saleDelete (id) {
        try {
            const sale = await Sales.findOne({where: {id}});
            const result = await sale.destroy();
            return result;
        } catch (error) {
            throw(error);
        };
    };
};

module.exports = SalesServices;
