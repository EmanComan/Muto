const db = require('../database/models');
const { Department } = db;

class DepartmentServices{
    static async addDepartment(departmentDetails){
        try {
            const department = await Department.create(departmentDetails);
            return department;
        } catch (error) {
            throw error;
        }
    }

    static async findDepartment(id){
        try {
            const department = await Department.findOne({where:Number(id)});
            return department;
        } catch (error) {
            throw error;
        }
    }

    static async findAllDepartments(){
        try {
            const allDepartments = await Department.findAll();
            return allDepartments;
        } catch (error) {
            throw error;
        }
    }

    static async updateDepartment(departmentDetails, id){
        try {
            const updatedDepartment = await Department.update(departmentDetails, {where:{id}});
            return updatedDepartment;
        } catch (error) {
            throw error;
        }
    }

    static async deleteDepartment(id){
        try {
            const departmentToDelete = await Department.destroy({where:{id}});
            return departmentToDelete; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DepartmentServices;