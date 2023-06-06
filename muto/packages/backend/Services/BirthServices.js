const db = require('../database/models');
const { Birth } = db;

class BirthServices{
    static async addBirth(birthDetails){
        try {
            const birth = await Birth.create(birthDetails);
            return birth;
        } catch (error) {
            throw error;
        }
    }

    static async findBirth(id){
        try {
            const birth = await Birth.findOne({where:Number(id)});
            return birth;
        } catch (error) {
            throw error;
        }
    }

    static async findAllBirths(){
        try {
            const allBirths = await Birth.findAll();
            return allBirths;
        } catch (error) {
            throw error;
        }
    }

    static async updateBirth(birthDetails, id){
        try {
            const updatedBirth = await Birth.update(birthDetails, {where:{id}});
            return updatedBirth;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBirth(id){
        try {
            const birthToDelete = await Birth.destroy({where:{id}});
            return birthToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BirthServices;