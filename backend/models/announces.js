'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Announces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Announces.init({
    nom_societe: DataTypes.STRING,
    skill: DataTypes.STRING,
    intitule: DataTypes.STRING,
    salaire: DataTypes.INTEGER,
    description: DataTypes.STRING,
    lieu: DataTypes.STRING,
    referent: DataTypes.STRING,
    contrat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Announces',
  });
  return Announces;
};