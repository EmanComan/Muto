const db = require('../database/models');
const { Invoice } = db;

class InvoiceServices{
    static async addInvoice(invoiceDetails){
        try {
            const invoice = await Invoice.create(invoiceDetails);
            return invoice;
        } catch (error) {
            throw error;
        }
    }

    static async findInvoice(id){
        try {
            const invoice = await Invoice.findOne({where:Number(id)});
            return invoice;
        } catch (error) {
            throw error;
        }
    }

    static async findAllInvoices(){
        try {
            const allInvoices = await Invoice.findAll();
            return allInvoices;
        } catch (error) {
            throw error;
        }
    }

    static async updateInvoice(invoiceDetails, id){
        try {
            const updatedInvoice = await Invoice.update(invoiceDetails, {where:{id}});
            return updatedInvoice;
        } catch (error) {
            throw error;
        }
    }

    static async deleteInvoice(id){
        try {
            const invoiceToDelete = await Invoice.destroy({where:{id}});
            return invoiceToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = InvoiceServices;