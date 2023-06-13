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
        foreignKey: 'articleId'
      })
      Article.hasMany(models.Article_Symptom, {
        foreignKey: 'articleId'
      })
      Article.hasMany(models.Article_Link, {
        foreignKey: 'articleId'
      })
    }
  }
  Article.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    symptom_desc: DataTypes.STRING,
    reason: DataTypes.STRING,
    solution: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Article',
  });
  return Article;
};