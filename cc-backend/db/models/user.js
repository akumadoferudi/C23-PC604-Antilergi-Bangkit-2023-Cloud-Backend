'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.STRING,
    nama: {
      type: DataTypes.STRING,
      validate: {
        max: 10
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Harap masukkan email yang valid!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 8,
        
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};