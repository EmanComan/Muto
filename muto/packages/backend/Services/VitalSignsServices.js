const db = require('../database/models');
const { VitalSigns } = db;

class VitalSignsServices{
    static async addVitalSigns(vitalSignsDetails){
        try {
            const vitalSigns = await VitalSigns.create(vitalSignsDetails);
            return vitalSigns;
        } catch (error) {
            throw error;
        }
    }

    static async findVitalSigns(id){
        try {
            const vitalSigns = await VitalSigns.findOne({where:Number(id)});
            return vitalSigns;
        } catch (error) {
            throw error;
        }
    }

    static async findAllVitalSignss(){
        try {
            const allVitalSignss = await VitalSigns.findAll();
            return allVitalSignss;
        } catch (error) {
            throw error;
        }
    }

    static async updateVitalSigns(vitalSignsDetails, id){
        try {
            const updatedVitalSigns = await VitalSigns.update(vitalSignsDetails, {where:{id}});
            return updatedVitalSigns;
        } catch (error) {
            throw error;
        }
    }

    static async deleteVitalSigns(id){
        try {
            const vitalSignsToDelete = await VitalSigns.destroy({where:{id}});
            return vitalSignsToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VitalSignsServices;