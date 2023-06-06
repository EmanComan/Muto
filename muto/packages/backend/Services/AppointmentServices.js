const db = require('../database/models');
const { Appointment } = db;

class AppointmentServices{
    static async addAppointment(appointmentDetails){
        try {
            const appointment = await Appointment.create(appointmentDetails);
            return appointment;
        } catch (error) {
            throw error;
        }
    }

    static async findAppointment(id){
        try {
            const appointment = await Appointment.findOne({where:Number(id)});
            return appointment;
        } catch (error) {
            throw error;
        }
    }

    static async findAllAppointments(){
        try {
            const allAppointments = await Appointment.findAll();
            return allAppointments;
        } catch (error) {
            throw error;
        }
    }

    static async updateAppointment(appointmentDetails, id){
        try {
            const updatedAppointment = await Appointment.update(appointmentDetails, {where:{id}});
            return updatedAppointment;
        } catch (error) {
            throw error;
        }
    }

    static async deleteAppointment(id){
        try {
            const appointmentToDelete = await Appointment.destroy({where:{id}});
            return appointmentToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AppointmentServices;