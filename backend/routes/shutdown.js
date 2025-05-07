const express = require('express');
const app = express();

const measuresRouter = require('./routes/measures');
const controlRouter = require('./routes/control');

app.use('/api', measuresRouter);
app.use('/api', controlRouter);

// otros middlewares, configuraciones...

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
