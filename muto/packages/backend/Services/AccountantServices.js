const db = require('../database/models');
const { Accountant } = db;

class AccountantServices{
    static async addAccountant(accountantDetails){
        try {
            const accountant = await Accountant.create(accountantDetails);
            return accountant;
        } catch (error) {
            throw error;
        }
    }

    static async findAccountant(id){
        try {
            const accountant = await Accountant.findOne({where:Number(id)});
            return accountant;
        } catch (error) {
            throw error;
        }
    }

    static async findAllAccountants(){
        try {
            const allAccountants = await Accountant.findAll();
            return allAccountants;
        } catch (error) {
            throw error;
        }
    }

    static async updateAccountant(accountantDetails, id){
        try {
            const updatedAccountant = await Accountant.update(accountantDetails, {where:{id}});
            return updatedAccountant;
        } catch (error) {
            throw error;
        }
    }

    static async deleteAccountant(id){
        try {
            const accountantToDelete = await Accountant.destroy({where:{id}});
            return accountantToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AccountantServices;