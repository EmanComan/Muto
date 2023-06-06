const db = require('../database/models');
const { DispatchedBlood } = db;

class DispatchedBloodServices{
    static async addDispatchedBlood(dispatchedBloodDetails){
        try {
            const dispatchedBlood = await DispatchedBlood.create(dispatchedBloodDetails);
            return dispatchedBlood;
        } catch (error) {
            throw error;
        }
    }

    static async findDispatchedBlood(id){
        try {
            const dispatchedBlood = await DispatchedBlood.findOne({where:Number(id)});
            return dispatchedBlood;
        } catch (error) {
            throw error;
        }
    }

    static async findAllDispatchedBloods(){
        try {
            const allDispatchedBloods = await DispatchedBlood.findAll();
            return allDispatchedBloods;
        } catch (error) {
            throw error;
        }
    }

    static async updateDispatchedBlood(dispatchedBloodDetails, id){
        try {
            const updatedDispatchedBlood = await DispatchedBlood.update(dispatchedBloodDetails, {where:{id}});
            return updatedDispatchedBlood;
        } catch (error) {
            throw error;
        }
    }

    static async deleteDispatchedBlood(id){
        try {
            const dispatchedBloodToDelete = await DispatchedBlood.destroy({where:{id}});
            return dispatchedBloodToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DispatchedBloodServices;