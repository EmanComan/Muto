const db = require('../database/models');
const { Pharmacist } = db;

class PharmacistServices{
    static async addPharmacist(pharmacistDetails){
        try {
            const pharmacist = await Pharmacist.create(pharmacistDetails);
            return pharmacist;
        } catch (error) {
            throw error;
        }
    }

    static async findPharmacist(id){
        try {
            const pharmacist = await Pharmacist.findOne({where:Number(id)});
            return pharmacist;
        } catch (error) {
            throw error;
        }
    }

    static async findAllPharmacists(){
        try {
            const allPharmacists = await Pharmacist.findAll();
            return allPharmacists;
        } catch (error) {
            throw error;
        }
    }

    static async updatePharmacist(pharmacistDetails, id){
        try {
            const updatedPharmacist = await Pharmacist.update(pharmacistDetails, {where:{id}});
            return updatedPharmacist;
        } catch (error) {
            throw error;
        }
    }

    static async deletePharmacist(id){
        try {
            const pharmacistToDelete = await Pharmacist.destroy({where:{id}});
            return pharmacistToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PharmacistServices;