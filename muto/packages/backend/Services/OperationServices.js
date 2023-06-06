const db = require('../database/models');
const { Operation } = db;

class OperationServices{
    static async addOperation(operationDetails){
        try {
            const operation = await Operation.create(operationDetails);
            return operation;
        } catch (error) {
            throw error;
        }
    }

    static async findOperation(id){
        try {
            const operation = await Operation.findOne({where:Number(id)});
            return operation;
        } catch (error) {
            throw error;
        }
    }

    static async findAllOperations(){
        try {
            const allOperations = await Operation.findAll();
            return allOperations;
        } catch (error) {
            throw error;
        }
    }

    static async updateOperation(operationDetails, id){
        try {
            const updatedOperation = await Operation.update(operationDetails, {where:{id}});
            return updatedOperation;
        } catch (error) {
            throw error;
        }
    }

    static async deleteOperation(id){
        try {
            const operationToDelete = await Operation.destroy({where:{id}});
            return operationToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = OperationServices;