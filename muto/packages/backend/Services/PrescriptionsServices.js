const db = require('../database/models');
const { Prescription } = db;

class PrescriptionServices{
    static async addPrescription(prescriptionDetails){
        try {
            const prescription = await Prescription.create(prescriptionDetails);
            return prescription;
        } catch (error) {
            throw error;
        }
    }

    static async findPrescription(id){
        try {
            const prescription = await Prescription.findOne({where:Number(id)});
            return prescription;
        } catch (error) {
            throw error;
        }
    }

    static async findAllPrescriptions(){
        try {
            const allPrescriptions = await Prescription.findAll();
            return allPrescriptions;
        } catch (error) {
            throw error;
        }
    }

    static async updatePrescription(prescriptionDetails, id){
        try {
            const updatedPrescription = await Prescription.update(prescriptionDetails, {where:{id}});
            return updatedPrescription;
        } catch (error) {
            throw error;
        }
    }

    static async deletePrescription(id){
        try {
            const prescriptionToDelete = await Prescription.destroy({where:{id}});
            return prescriptionToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PrescriptionServices;