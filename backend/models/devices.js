const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Device = sequelize.define('devices', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,

    },
    image: {
        type: DataTypes.STRING,
    },
    currentValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    isOn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    tableName: 'devices',
    timestamps: true
});

module.exports = Device;