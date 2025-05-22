const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mqttdata', 'messi', 'trubenja38', {
    host: '172.31.62.36',
    dialect: 'postgres',
    port: 5432,
});

module.exports = { sequelize };