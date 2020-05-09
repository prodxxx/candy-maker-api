const products = (connection, Sequelize, manufacturers) => {
  return connection.define('products', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    yearintroduced: { type: Sequelize.DATEONLY },
    manufacturerId: { type: Sequelize.INTEGER, REFERENCES: { model: manufacturers, key: 'id' } }
  }, { paranoid: true })
}

module.exports = products
