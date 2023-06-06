const db = require('../database/models');
const { Patient } = db;

class PatientServices{
    static async addPatient(patientDetails){
        try {
            const patient = await Patient.create(patientDetails);
            return patient;
        } catch (error) {
            throw error;
        }
    }

    static async findPatient(id){
        try {
            const patient = await Patient.findOne({where:Number(id)});
            return patient;
        } catch (error) {
            throw error;
        }
    }
    static async findPatientByEmail(email){
        try {
            const patientemail = await Patient.findOne({where:{email}});
            return patientemail;
        } catch (error) {
            throw error;
        }
    }

    static async findAllPatients(){
        try {
            const allPatients = await Patient.findAll();
            return allPatients;
        } catch (error) {
            throw error;
        }
    }

    static async updatePatient(patientDetails, id){
        try {
            const updatedPatient = await Patient.update(patientDetails, {where:{id}});
            return updatedPatient;
        } catch (error) {
            throw error;
        }
    }

    static async deletePatient(id){
        try {
            const patientToDelete = await Patient.destroy({where:{id}});
            return patientToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PatientServices;