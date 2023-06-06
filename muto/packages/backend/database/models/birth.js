'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Birth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Birth.init({
    patient: DataTypes.STRING,
    birthtype: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Birth',
  });
  return Birth;
};