const express = require('express');
const router = express.Router();
const Device = require('../models/devices');

// Get all devices
router.get('/', async (req, res) => {
    try {
        const devices = await Device.findAll();
        res.json(devices);
    } catch (error) {
        console.error('Error fetching devices:', error);
        res.status(500).json({ message: 'Failed to fetch devices' });
    }
});

// Get device by ID
router.get('/:id', async (req, res) => {
    try {
        const device = await Device.findByPk(req.params.id);
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }
        res.json(device);
    } catch (error) {
        console.error('Error fetching device:', error);
        res.status(500).json({ message: 'Failed to fetch device' });
    }
});

// Create new device
router.post('/', async (req, res) => {
    try {
        const { name, description, image, currentValue, isOn, userId } = req.body;
        const device = await Device.create({
            name,
            description,
            image,
            currentValue,
            isOn,
            userId
        });
        res.status(201).json(device);
    } catch (error) {
        console.error('Error creating device:', error);
        res.status(500).json({ message: 'Failed to create device' });
    }
});

// Update device
router.put('/:id', async (req, res) => {
    try {
        const { name, description, image, currentValue, isOn } = req.body;
        const device = await Device.findByPk(req.params.id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        await device.update({
            name,
            description,
            image,
            currentValue,
            isOn
        });

        res.json(device);
    } catch (error) {
        console.error('Error updating device:', error);
        res.status(500).json({ message: 'Failed to update device' });
    }
});

// Toggle device on/off status
router.patch('/:id/toggle', async (req, res) => {
    try {
        const device = await Device.findByPk(req.params.id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        await device.update({
            isOn: !device.isOn
        });

        res.json(device);
    } catch (error) {
        console.error('Error toggling device:', error);
        res.status(500).json({ message: 'Failed to toggle device' });
    }
});

// Delete device
router.delete('/:id', async (req, res) => {
    try {
        const device = await Device.findByPk(req.params.id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        await device.destroy();
        res.json({ message: 'Device deleted successfully' });
    } catch (error) {
        console.error('Error deleting device:', error);
        res.status(500).json({ message: 'Failed to delete device' });
    }
});

// Get devices by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const devices = await Device.findAll({
            where: {
                userId: req.params.userId
            }
        });
        res.json(devices);
    } catch (error) {
        console.error('Error fetching user devices:', error);
        res.status(500).json({ message: 'Failed to fetch user devices' });
    }
});

module.exports = router;