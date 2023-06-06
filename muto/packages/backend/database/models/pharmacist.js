'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pharmacist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pharmacist.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    department: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pharmacist',
  });
  return Pharmacist;
};