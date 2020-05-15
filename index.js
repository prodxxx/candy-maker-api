const express = require('express')
const { getAllManufacturers, getManufacturerById } = require('./controllers/manufacturers')
const { getAllProducts, getProductsById } = require('./controllers/products')

const app = express()

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:name', getManufacturerById)

app.get('/products', getAllProducts)

app.get('/products/:name', getProductsById)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
