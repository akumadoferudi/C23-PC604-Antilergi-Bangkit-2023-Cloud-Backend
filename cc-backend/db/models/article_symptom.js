'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Symptom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article_Symptom.belongsto(models.Article, {
        foreignKey: 'articleId'
      })
      Article_Symptom.belongsto(models.Symptom, {
        foreignKey: 'symtompId'
      })
    }
  }
  ArticleSymptom.init({
    articleId: DataTypes.INTEGER,
    symptomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article_Symptom',
  });
  return Article_Symptom;
};