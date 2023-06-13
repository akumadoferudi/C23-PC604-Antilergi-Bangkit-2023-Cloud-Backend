'use strict';
const {
  Model
} = require('sequelize');
const articleallergy = require('./articleallergy');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.Article_Allergy, {
        foreignKey: 'allergyId'
      })
      Article.hasMany(models.Article_Symptom, {
        foreignKey: 'symtompId'
      })
    }
  }
  Article.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    reason: DataTypes.STRING,
    solution: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};