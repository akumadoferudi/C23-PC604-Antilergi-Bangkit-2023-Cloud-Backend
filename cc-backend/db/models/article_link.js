'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article_Link.belongsTo(models.Article, {
        foreignKey: 'articleId'
      })
      Article_Link.belongsTo(models.Resources_Link, {
        foreignKey: 'linkId'
      })
    }
  }
  Article_Link.init({
    articleId: DataTypes.INTEGER,
    linkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article_Link',
  });
  return Article_Link;
};