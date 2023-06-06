'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prescription.init({
    patient: DataTypes.STRING,
    casehistory: DataTypes.STRING,
    description: DataTypes.STRING,
    medication: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};