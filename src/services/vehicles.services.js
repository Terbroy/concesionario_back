const { Vehicles } = require("../models");

class VehiclesServices {
    static async getAll(){
        try {
            const result = await Vehicles.findAll();
            return result;
        } catch (error) {
            throw(error);
        };
    }
    static async get(id){
        try {
            const result = await Vehicles.findOne({
                where: { id }
            });
            return result;
        } catch (error) {
            throw(error);
        };
    }
    static async create(data){
        try {
            const result = await Vehicles.create(data);
            return result;
        } catch (error) {
            throw(error);
        };
    }
    static async edit (id, body) {
        try {
            const vehicle = await Vehicles.findOne({where: {id}});
            const result = await vehicle.update({...body});
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async delete (id) {
        try {
            const vehicle = await Vehicles.findOne({where: {id}});
            const result = await vehicle.destroy();
            return result;
        } catch (error) {
            throw(error);
        };
    };
    static async getMatches (data) {
        try {
            const result = await Vehicles.findAll({where: {...data}});
            return result;
        } catch (error) {
            throw(error);
        };
    };
}

module.exports = VehiclesServices