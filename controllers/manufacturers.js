const models = require('../models')

const getAllManufacturersWithAllProducts = async (request, response) => {
  const manufacturers = await models.manufacturers.findAll({
    include: [{ model: models.Products }]
  })

  return response.send(manufacturers)
}

const getManufacturerWithProductsById = async (request, response) => {
  const { id } = request.params



  const manufacturer = await models.manufacturers.findOne({
    where: { id },
    include: [{ model: models.products }]
  })

  return manufacturer
    ? response.send(manufacturer)
    : response.sendStatus(404)
}

module.exports = { getAllManufacturersWithAllProducts, getManufacturerWithProductsById }
