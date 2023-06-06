const db = require('../database/models');
const { Nurse } = db;

class NurseServices{
    static async addNurse(nurseDetails){
        try {
            const nurse = await Nurse.create(nurseDetails);
            return nurse;
        } catch (error) {
            throw error;
        }
    }

    static async findNurse(id){
        try {
            const nurse = await Nurse.findOne({where:Number(id)});
            return nurse;
        } catch (error) {
            throw error;
        }
    }

    static async findAllNurses(){
        try {
            const allNurses = await Nurse.findAll();
            return allnurses;
        } catch (error) {
            throw error;
        }
    }

    static async updateNurse(nurseDetails, id){
        try {
            const updatednurse = await Nurse.update(nurseDetails, {where:{id}});
            return updatednurse;
        } catch (error) {
            throw error;
        }
    }

    static async deleteNurse(id){
        try {
            const nurseToDelete = await Nurse.destroy({where:{id}});
            return nurseToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = NurseServices;