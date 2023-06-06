const db = require('../database/models');
const { Doctor } = db;

class DoctorServices{
    static async addDoctor(doctorDetails){
        try {
            const doctor = await Doctor.create(doctorDetails);
            return doctor;
        } catch (error) {
            throw error;
        }
    }

    static async findDoctor(id){
        try {
            const doctor = await Doctor.findOne({where:Number(id)});
            return doctor;
        } catch (error) {
            throw error;
        }
    }

    static async findAllDoctors(){
        try {
            const allDoctors = await Doctor.findAll();
            return allDoctors;
        } catch (error) {
            throw error;
        }
    }

    static async updateDoctor(doctorDetails, id){
        try {
            const updatedDoctor = await Doctor.update(doctorDetails, {where:{id}});
            return updatedDoctor;
        } catch (error) {
            throw error;
        }
    }

    static async deleteDoctor(id){
        try {
            const doctorToDelete = await Doctor.destroy({where:{id}});
            return doctorToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DoctorServices;