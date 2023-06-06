const db = require('../database/models');
const { Bed } = db;

class BedServices{
    static async addBed(bedDetails){
        try {
            const Bed = await Bed.create(bedDetails);
            return Bed;
        } catch (error) {
            throw error;
        }
    }

    static async findBed(id){
        try {
            const bed = await Bed.findOne({where:Number(id)});
            return bed;
        } catch (error) {
            throw error;
        }
    }

    static async findAllBeds(){
        try {
            const allBeds = await Bed.findAll();
            return allBeds;
        } catch (error) {
            throw error;
        }
    }

    static async updateBed(BedDetails, id){
        try {
            const updatedBed = await Bed.update(BedDetails, {where:{id}});
            return updatedBed;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBed(id){
        try {
            const bedToDelete = await Bed.destroy({where:{id}});
            return bedToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BedServices;