'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Link.belongsToMany(models.Article, { through: Article_Link })
      Link.hasMany(models.Article_Link, {
        foreignKey: 'linkId'
      })
    }
  }
  Link.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Link',
  });
  return Link;
};