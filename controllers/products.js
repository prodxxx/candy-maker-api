const models = require('../models')

const getAllProductsWithManufacturers = async (request, response) => {
  const products = await models.products.findAll({
    include: [{ model: models.manufacturers }]
  })

  return response.send(products)
}

const getProductWithManufacturerByID = async (request, response) => {
  const { id } = request.params

  const product = await models.products.findOne({
    where: { id },
    include: [{ model: models.manufacturers }]
  })

  return product
    ? response.send(product)
    : response.sendStatus(404)
}

module.exports = { getAllProductsWithManufacturers, getProductWithManufacturerByID }