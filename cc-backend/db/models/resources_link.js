'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resources_Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resources_Link.hasMany(models.Article_Link, {
        foreignKey: 'linkId'
      })
    }
  }
  Resources_Link.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Resources_Link',
  });
  return Resources_Link;
};