'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anhistorique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Anhistorique.init({
    nom_societe: DataTypes.STRING,
    nom_postulant: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anhistorique',
  });
  return Anhistorique;
};