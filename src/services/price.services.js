const {Price} = require('../models');

class PriceServices {

    static async pricesGet() {
        try {
            const result = await Price.findAll();
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async priceGet(id) {
        try {
            const result = await Price.findOne({
                where: { id },
            });
            return result;
        } catch (error) {
            throw(error);
        };
    };

    static async pricePost (newprice) {
        try {
            const result = await Price.create(newprice);
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async pricePatch (id, body) {
        try {
            const price = await Price.findOne({where: {id}});
            const result = await price.update({...body});
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async priceDelete (id) {
        try {
            const price = await Price.findOne({where: {id}});
            const result = await price.destroy();
            return result;
        } catch (error) {
            throw(error);
        };
    };
};

module.exports = PriceServices;