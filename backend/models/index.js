const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('volt_control', 'postgres', 'Generala#1', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

module.exports = { sequelize };
