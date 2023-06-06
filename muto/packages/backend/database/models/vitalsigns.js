'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VitalSigns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VitalSigns.init({
    patient: {type: DataTypes.STRING,
    allowNull: false},
    bloodpressure: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    pulse: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    SPO2: DataTypes.INTEGER,
    respirationrate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VitalSigns',
  });
  return VitalSigns;
};