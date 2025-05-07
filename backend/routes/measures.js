const express = require('express');
const router = express.Router();
const { Mediciones } = require('../models'); // Ajustá la ruta a tu modelo si es distinta

// Ruta para obtener consumos
router.get('/consumos', async (req, res) => {
    try {
        const consumos = await Mediciones.findAll({
            order: [['timestamp', 'DESC']],
            limit: 2
        });

        const total = consumos.reduce((sum, row) => sum + row.corriente, 0);

        res.json({
            consumos,
            consumoTotal: total,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al consultar la base de datos');
    }
});

module.exports = router;
