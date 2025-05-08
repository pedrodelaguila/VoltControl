const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const Device = require('./models/devices');
const User = require('./models/users');

const devicesRouter = require('./routes/devicesController');
const usersRouter = require('./routes/usersController');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Define relationships between models
User.hasMany(Device, { foreignKey: 'userId' });
Device.belongsTo(User, { foreignKey: 'userId' });

// Mount routes
app.use('/api/devices', devicesRouter);
app.use('/api', usersRouter);

// Database connection
sequelize.authenticate()
    .then(() => console.log('✅ Conectado a PostgreSQL con Sequelize'))
    .catch(err => console.error('❌ Error de conexión:', err));

// Sync models - using { force: false } to prevent overwriting existing tables
sequelize.sync({ alter: true })
    .then(() => console.log('📦 Modelos sincronizados'))
    .catch(err => console.error('❌ Error al sincronizar modelos:', err));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});