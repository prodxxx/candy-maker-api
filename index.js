const express = require('express')
const { getAllManufacturersWithAllProducts, getManufacturerWithProductsById } = require('./controllers/manufacturers.js')
const { getAllProductsWithManufacturers, getProductWithManufacturerByID } = require('./controllers/products.js')

const app = express()

app.get('/manufacturers', getAllManufacturersWithAllProducts)
app.get('/manufacturers/:id', getManufacturerWithProductsById)
app.get('/products', getAllProductsWithManufacturers)
app.get('/products/:id', getProductWithManufacturerByID)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
