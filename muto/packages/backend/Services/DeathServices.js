const db = require('../database/models');
const { Death } = db;

class DeathServices{
    static async addDeath(deathDetails){
        try {
            const death = await Death.create(deathDetails);
            return death;
        } catch (error) {
            throw error;
        }
    }

    static async findDeath(id){
        try {
            const death = await Death.findOne({where:Number(id)});
            return death;
        } catch (error) {
            throw error;
        }
    }

    static async findAllDeaths(){
        try {
            const allDeaths = await Death.findAll();
            return allDeaths;
        } catch (error) {
            throw error;
        }
    }

    static async updateDeath(deathDetails, id){
        try {
            const updatedDeath = await Death.update(deathDetails, {where:{id}});
            return updatedDeath;
        } catch (error) {
            throw error;
        }
    }

    static async deleteDeath(id){
        try {
            const deathToDelete = await Death.destroy({where:{id}});
            return deathToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DeathServices;