const {
  Model,
  DataTypes,
  Sequelize
} = require('sequelize')

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: { //* nombre en JS
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at', //* nombre en PostgreSQL
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate() {

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
