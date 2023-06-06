const db = require('../database/models');
const { User, Role } = db;

class UserServices {
  static async findUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email }, include: Role });
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async addUser(userDetails) {
    try {
      const addedUser = await User.create(userDetails);
      return addedUser;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id) {
    try {
      const getUser = await User.findOne({
        where: { id: Number(id) },
        include: Role,
      });
      return getUser;
    } catch (error) {
      throw error;
    }
  }

  static async findAllUsers() {
    try {
      const findUsers = await User.findAll({ include: Role });
      return findUsers;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const deleteuser = await User.destroy({ where: { id } });
      return deleteuser;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, userDetails) {
    try {
      const updateUser = await User.update(userDetails, {
        where: { id: Number(id) },
      });
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  static async findRoleById(id) {
    try {
      const RoleId = await Role.findOne({ where: { id } });
      return RoleId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
