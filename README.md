# Candy Maker API

## Part One Instructions
In the initial commit of this project you were provided with the SQL to create a database of candies with their manufacturers. Working in a brach called `part-one-answer`, your task is to implement an Express driven REST API that allows a user to retrieve this data. Your API should support the routes listed below, pulling the data from the database via Sequelize models.

## Requests and Expected Respones

### Get All Manufacturers with their products

**GET** http://localhost:1337/manufacturers

**Response**
```JSON
[{
  id: 1,
  name: "August Storck KG",
  country: "DE",
  createdAt: "2020-04-02T15:48:14.000Z",
  updatedAt: "2020-04-02T15:48:14.000Z",
  deletedAt: null,
  products: [{
    id: 1,
    name: "Mamba",
    yearIntroduced: "1953-01-01",
    manufacturerId: 1,
    createdAt: "2020-04-02T15:48:14.000Z",
    updatedAt: "2020-04-02T15:48:14.000Z",
    deletedAt: null
  }],
},
... all other manufacturers
]
```

### Get a Manufacturer with their products by their Id

**GET** http://localhost:1337/manufacturers/16

**Response**
```JSON
{
  id: 16,
  name: "Zeta Espacial S.A.",
  country: "ES",
  createdAt: "2020-04-02T15:48:14.000Z",
  updatedAt: "2020-04-02T15:48:14.000Z",
  deletedAt: null,
  products: [{
    id: 69,
    name: "Pop Rocks",
    yearIntroduced: "1956-01-01",
    manufacturerId: 16,
    createdAt: "2020-04-02T15:48:17.000Z",
    updatedAt: "2020-04-02T15:48:17.000Z",
    deletedAt: null
  }]
}
```

### Get All Product with their manufacturers

**GET** http://localhost:1337/products

**Response**
```JSON
[{
  id: 1,
  name: "Mamba",
  yearIntroduced: "1953-01-01",
  manufacturerId: 1,
  createdAt: "2020-04-02T15:48:14.000Z",
  updatedAt: "2020-04-02T15:48:14.000Z",
  deletedAt: null,
  manufacturer: {
    id: 1,
    name: "August Storck KG",
    country: "DE",
    createdAt: "2020-04-02T15:48:14.000Z",
    updatedAt: "2020-04-02T15:48:14.000Z",
    deletedAt: null
  }
},
... all other products
]
```

### Get a Product with its manufacturer by its Id

**GET** http://localhost:1337/products/26

**Response**
```JSON
{
  id: 26,
  name: "Bonkers",
  yearIntroduced: "1985-01-01",
  manufacturerId: 7,
  createdAt: "2020-04-02T15:48:15.000Z",
  updatedAt: "2020-04-02T15:48:15.000Z",
  deletedAt: null,
  manufacturer: {
    id: 7,
    name: "Nabisco",
    country: "US",
    createdAt: "2020-04-02T15:48:14.000Z",
    updatedAt: "2020-04-02T15:48:14.000Z",
    deletedAt: null
  }
}
```

## Part Two Instructions
In a branch called `part-two-answer`, continuing from `part-one-answer`, your task is to create two migrations. The first should create all needed tables for this project. The second should add all data for this project into those tables.  All existing routes should continue to work and the `setup.sql` should no longer be needed.

## Part Three Instructions
In a branch called `part-three-answer`, continuing from `part-two-answer`, your task is to update the existing routes to support the specification laid out below.

## Requests and Expected Respones

### UNCHANGED: Get All Manufacturers with their products

### Get a Manufacturer with their products by their ~~id~~ name (case-insensitive fuzzy match)

**GET** http://localhost:1337/manufacturers/zeta

**Response**
```JSON
{
  id: 16,
  name: "Zeta Espacial S.A.",
  country: "ES",
  products: [{
    id: 69,
    name: "Pop Rocks",
    yearIntroduced: "1956-01-01",
  }]
}
```

### UNCHANGED: Get All Product with their manufacturers

### Get a Product with its manufacturer by its ~~id~~ name (case-insensitive fuzzy match)

**GET** http://localhost:1337/products/bonk

**Response**
```JSON
{
  id: 26,
  name: "Bonkers",
  yearIntroduced: "1985-01-01",
  manufacturer: {
    id: 7,
    name: "Nabisco",
    country: "US",
  }
}
```
