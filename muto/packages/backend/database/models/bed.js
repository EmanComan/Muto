'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bed.init({
    patient: DataTypes.STRING,
    patientstatus: DataTypes.STRING,
    bedtype: DataTypes.STRING,
    bednumber: DataTypes.INTEGER,
    allotmentdate: DataTypes.STRING,
    dischargedate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bed',
  });
  return Bed;
};