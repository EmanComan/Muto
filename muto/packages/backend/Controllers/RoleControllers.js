const RoleServices = require('../Services/RoleServices');

class RoleControllers {
  static async createRole(req, res, next) {
    try {
      const roleDetails = req.body;

      const roleExists = await RoleServices.findRoleByName(req.body.name);
      if (roleExists) {
        return res.status(409).json({
          status: res.statusCode,
          message: 'Role Already Exists',
        });
      } else {
        const createRole = await RoleServices.addRole(roleDetails);
        return res.status(201).json({
          staus: res.statusCode,
          message: 'Role Created Successfully',
          data: createRole,
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async findAllRoles(req, res, next) {
    try {
      const findRoles = await RoleServices.findAllRoles();
      if (findRoles.length === 0) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'Ooops Roles Not Found!!!!!',
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          message: 'My Roles',
          data: findRoles,
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async updateRole(req, res, next) {
    try {
      const roleExists = await RoleServices.findRoleById(req.params.id);
      if (!roleExists) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'Role Not found',
        });
      } else {
        const updatedRole = await RoleServices.updateRole(
          req.params.id,
          req.body,
        );
        return res.status(201).json({
          status: res.statusCode,
          message: 'Role Updated Successfully',
          data: updatedRole,
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async deleteRole(req, res, next) {
    try {
      const deleteRole = await RoleServices.deleteRoleById(req.params.id);
      if (!deleteRole) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'Role Not Found',
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          message: 'Role Successfully Deleted',
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getOneRole(req, res, next) {
    try {
      const getOneRole = await RoleServices.findRoleById(req.params.id);
      if (!getOneRole) {
        return res.status(404).json({
          staus: res.statusCode,
          message: 'Role Not found',
        });
      } else {
        return res.status(200).json({
          staus: res.statusCode,
          data: getOneRole,
        });
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = RoleControllers;
