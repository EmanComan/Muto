const db = require('../database/models');
const { Payment } = db;

class PaymentServices{
    static async addPayment(paymentDetails){
        try {
            const payment = await Payment.create(paymentDetails);
            return payment;
        } catch (error) {
            throw error;
        }
    }

    static async findPayment(id){
        try {
            const payment = await Payment.findOne({where:Number(id)});
            return payment;
        } catch (error) {
            throw error;
        }
    }

    static async findAllPayments(){
        try {
            const allPayments = await Payment.findAll();
            return allPayments;
        } catch (error) {
            throw error;
        }
    }

    static async updatePayment(paymentDetails, id){
        try {
            const updatedPayment = await Payment.update(paymentDetails, {where:{id}});
            return updatedPayment;
        } catch (error) {
            throw error;
        }
    }

    static async deletePayment(id){
        try {
            const paymentToDelete = await Payment.destroy({where:{id}});
            return paymentToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PaymentServices;