'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DispatchedBlood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DispatchedBlood.init({
    patient: DataTypes.STRING,
    bloodgroup: DataTypes.STRING,
    charges: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DispatchedBlood',
  });
  return DispatchedBlood;
};