'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Death extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Death.init({
    patient: DataTypes.STRING,
    cause: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Death',
  });
  return Death;
};