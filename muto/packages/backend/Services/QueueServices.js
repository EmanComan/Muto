const db = require('../database/models');
const { Queue } = db;

class QueueServices{
    static async addQueue(queueDetails){
        try {
            const queue = await Queue.create(queueDetails);
            return queue;
        } catch (error) {
            throw error;
        }
    }

    static async findQueue(id){
        try {
            const queue = await Queue.findOne({where:Number(id)});
            return queue;
        } catch (error) {
            throw error;
        }
    }

    static async findAllQueues(){
        try {
            const allQueues = await Queue.findAll();
            return allQueues;
        } catch (error) {
            throw error;
        }
    }

    static async updateQueue(queueDetails, id){
        try {
            const updatedQueue = await Queue.update(queueDetails, {where:{id}});
            return updatedQueue;
        } catch (error) {
            throw error;
        }
    }

    static async deleteQueue(id){
        try {
            const queueToDelete = await Queue.destroy({where:{id}});
            return queueToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = QueueServices;