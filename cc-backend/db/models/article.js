'use strict';
const {
  Model
} = require('sequelize');
// const Article_Allergy = require('./article_allergy');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Article.belongsToMany(models.Allergy, { through: Article_Allergy })
      // Article.belongsToMany(models.Symptom, { through: Article_Symptom })
      // Article.belongsToMany(models.Link, { through: Article_Link })
      Article.hasMany(models.Article_Link, {
        foreignKey: 'articleId'
      })
    }
  }
  Article.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    allergy: DataTypes.TEXT,
    symptom: DataTypes.TEXT,
    reason: DataTypes.TEXT,
    solution: DataTypes.TEXT
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Article',
  });
  return Article;
};