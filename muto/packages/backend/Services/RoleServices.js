const db = require('../database/models');
const { Role } = db;

class RoleServices {
  static async addRole(roleDetails) {
    try {
      const addrole = await Role.create(roleDetails);
      return addrole;
    } catch (error) {
      throw error;
    }
  }

  static async findRoleByName(name) {
    try {
      const findrole = await Role.findOne({ where: { name } });
      return findrole;
    } catch (error) {
      throw error;
    }
  }

  static async findAllRoles() {
    try {
      const findRoles = await Role.findAll();
      return findRoles;
    } catch (error) {
      throw error;
    }
  }

  static async updateRole(id, roleDetails) {
    try {
      const role = await Role.update(roleDetails, { where: { id } });
      return role;
    } catch (error) {
      throw error;
    }
  }

  static async findRoleById(id) {
    try {
      const role = await Role.findOne({ where: { id: Number(id) } });
      return role;
    } catch (error) {
      throw error;
    }
  }

  static async deleteRoleById(id) {
    try {
      const role = await Role.destroy({ where: { id: Number(id) } });
      return role;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoleServices;
