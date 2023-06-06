const db = require('../database/models');
const { Receptionist } = db;

class ReceptionistServices{
    static async addReceptionist(receptionistDetails){
        try {
            const receptionist = await Receptionist.create(receptionistDetails);
            return receptionist;
        } catch (error) {
            throw error;
        }
    }

    static async findReceptionist(id){
        try {
            const receptionist = await Receptionist.findOne({where:Number(id)});
            return receptionist;
        } catch (error) {
            throw error;
        }
    }

    static async findAllReceptionist(){
        try {
            const allReceptionists = await Receptionist.findAll();
            return allReceptionists;
        } catch (error) {
            throw error;
        }
    }

    static async updateReceptionist(receptionistDetails, id){
        try {
            const updatedReceptionist = await Receptionist.update(receptionistDetails, {where:{id}});
            return updatedReceptionist;
        } catch (error) {
            throw error;
        }
    }

    static async deleteReceptionist(id){
        try {
            const receptionistToDelete = await Receptionist.destroy({where:{id}});
            return receptionistToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ReceptionistServices;