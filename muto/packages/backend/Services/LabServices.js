const db = require('../database/models');
const { Labouratorist } = db;

class LabouratoristServices{
    static async addLabouratorist(LabouratoristDetails){
        try {
            const labouratorist = await Labouratorist.create(LabouratoristDetails);
            return labouratorist;
        } catch (error) {
            throw error;
        }
    }

    static async findLabouratorist(id){
        try {
            const labouratorist = await Labouratorist.findOne({where:Number(id)});
            return labouratorist;
        } catch (error) {
            throw error;
        }
    }

    static async findAllLabouratorists(){
        try {
            const allLabouratorists = await Labouratorist.findAll();
            return allLabouratorists;
        } catch (error) {
            throw error;
        }
    }

    static async updateLabouratorist(labouratoristDetails, id){
        try {
            const updatedLabouratorist = await Labouratorist.update(labouratoristDetails, {where:{id}});
            return updatedLabouratorist;
        } catch (error) {
            throw error;
        }
    }

    static async deleteLabouratorist(id){
        try {
            const labouratoristToDelete = await Labouratorist.destroy({where:{id}});
            return labouratoristToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LabouratoristServices;