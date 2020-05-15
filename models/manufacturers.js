const Manufacturers = (connection, Sequelize) => {
  return connection.define('manufacturers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    country: { type: Sequelize.STRING },
  }, { defaultScope: { attributes: { exclude: ['deletedAt', 'createdAt', 'updatedAt'] } } }, { paranoid: true })
}

module.exports = Manufacturers