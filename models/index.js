const Sequelize = require('sequelize')
const ProductsModel = require('./products')
const ManufacturersModel = require('./manufacturers')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost', dialect: 'mysql'
})

const manufacturers = ManufacturersModel(connection, Sequelize)
const products = ProductsModel(connection, Sequelize, manufacturers)


manufacturers.hasMany(products)
products.belongsTo(manufacturers)

module.exports = {
  products,
  manufacturers
}
