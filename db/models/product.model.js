const {
  Model,
  DataTypes,
  Sequelize
} = require('sequelize')

const PRODUCT_TABLE = 'products'

const ProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: { //* nombre en JS
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at', //* nombre en PostgreSQL
    defaultValue: Sequelize.NOW
  }
}

class Product extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }
  }
}

module.exports = { PRODUCT_TABLE, Product, ProductSchema }
