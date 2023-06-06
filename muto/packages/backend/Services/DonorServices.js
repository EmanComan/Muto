const db = require('../database/models');
const { Donor } = db;

class DonorServices{
    static async addDonor(donorDetails){
        try {
            const donor = await Donor.create(donorDetails);
            return donor;
        } catch (error) {
            throw error;
        }
    }

    static async findDonor(id){
        try {
            const donor = await Donor.findOne({where:Number(id)});
            return donor;
        } catch (error) {
            throw error;
        }
    }

    static async findAllDonors(){
        try {
            const allDonors = await Donor.findAll();
            return allDonors;
        } catch (error) {
            throw error;
        }
    }

    static async updateDonor(donorDetails, id){
        try {
            const updatedDonor = await Donor.update(donorDetails, {where:{id}});
            return updatedDonor;
        } catch (error) {
            throw error;
        }
    }

    static async deleteDonor(id){
        try {
            const donorToDelete = await Donor.destroy({where:{id}});
            return donorToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DonorServices;