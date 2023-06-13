'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article_Allergy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article_Allergy.belongsto(models.Article, {
        foreignKey: 'articleId'
      })
      Article_Allergy.belongsto(models.Allergy, {
        foreignKey: 'allergyId'
      })
    }
  }
  ArticleAllergy.init({
    articleId: DataTypes.INTEGER,
    allergyId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Article_Allergy',
  });
  return Article_Allergy;
};