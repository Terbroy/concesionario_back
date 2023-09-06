const {Buyers} = require('../models');

class BuyersServices {

    static async buyersGet() {
        try {
            const result = await Buyers.findAll();
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async buyerGet(id) {
        try {
            const result = await Buyers.findOne({
                where: { id },
            });
            return result;
        } catch (error) {
            throw(error);
        };
    };

    static async buyerPost (newBuyer) {
        try {
            const result = await Buyers.create(newBuyer);
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async buyerPatch (id, body) {
        try {
            const buyer = await Buyers.findOne({where: {id}});
            const result = await buyer.update({...body});
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async buyerDelete (id) {
        try {
            const buyer = await Buyers.findOne({where: {id}});
            const result = await buyer.destroy();
            return result;
        } catch (error) {
            throw(error);
        };
    };
};

module.exports = BuyersServices;