'use strict';
const {
  Model
} = require('sequelize');
const bcrypt =  require('bcrypt');
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
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    username: {
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
    },
    API_Key: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', user => {
    if (user.password) {
      user.password = bcrypt.hashSync(user.password, 5)
    }
  })

  // User.addHook('beforeUpdate', user => {    
  //   if (user.password) {
  //     user.password = bcrypt.hashSync(user.password, 5)
  //   }
  // })

  return User;
};