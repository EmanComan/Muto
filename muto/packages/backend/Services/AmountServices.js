const db = require('../database/models');
const { Amount } = db;

class AmountServices{
    static async addAmount(amountDetails){
        try {
            const amount = await Amount.create(amountDetails);
            return amount;
        } catch (error) {
            throw error;
        }
    }

    static async findAmount(id){
        try {
            const amount = await Amount.findOne({where:Number(id)});
            return amount;
        } catch (error) {
            throw error;
        }
    }

    static async findAllAmounts(){
        try {
            const allAmounts = await Amount.findAll();
            return allAmounts;
        } catch (error) {
            throw error;
        }
    }

    static async updateAmount(amountDetails, id){
        try {
            const updatedAmount = await Amount.update(amountDetails, {where:{id}});
            return updatedAmount;
        } catch (error) {
            throw error;
        }
    }

    static async deleteAmount(id){
        try {
            const amountToDelete = await Amount.destroy({where:{id}});
            return amountToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AmountServices;