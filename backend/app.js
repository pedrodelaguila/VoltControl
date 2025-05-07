const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const measuresRouter = require('./routes/measures');
const usersRouter = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Montar las rutas
app.use('/api', measuresRouter);
app.use('/api', usersRouter);

// Conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('✅ Conectado a PostgreSQL con Sequelize'))
    .catch(err => console.error('❌ Error de conexión:', err));

// Sincronizar modelos
sequelize.sync()
    .then(() => console.log('📦 Modelos sincronizados'))
    .catch(err => console.error('❌ Error al sincronizar modelos:', err));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});


