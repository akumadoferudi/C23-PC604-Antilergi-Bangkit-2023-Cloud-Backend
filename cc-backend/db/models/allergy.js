'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allergy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allergy.hasMany(models.Article_Allergy, {
        foreignKey: 'allergyId'
      })
    }
  }
  Allergy.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allergy',
  });
  return Allergy;
};