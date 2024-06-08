const Household = require('../models/houseHold');

const householdController = {};

householdController.createHouseholdAndPerson = async (req, res) => {
    try {
        const { canton, housingType, riskLevel, latitude, longitude, members } = req.body;

        if (!canton || !housingType || !riskLevel || !latitude || !longitude || !members) {
            return res.status(400).json({ ok: false, error: 'Todos los campos son requeridos' });
        }

        const household = new Household({ canton, housingType, riskLevel, latitude, longitude, members });
        const newHousehold = await household.save();

        res.status(201).json({
            ok: true,
            message: 'Familia y miembros creados exitosamente',
            household: newHousehold,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: error.message || 'Error interno del servidor' });
    }
};

householdController.getAllHouseholds = async (req, res) => {
    try {
        const households = await Household.find().populate('members');
        res.status(200).json({
            ok: true,
            households,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: 'Error interno del servidor' });
    }
};

householdController.getHouseholdById = async (req, res) => {
    try {
        const { id } = req.params;
        const household = await Household.findById(id);
        
        if (!household) {
            return res.status(404).json({ ok: false, error: 'Household not found' });
        }

        res.status(200).json({ ok: true, household });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: 'Internal server error' });
    }
};

module.exports = householdController;
