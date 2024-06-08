const express = require('express');
const router = express.Router();
const householdController = require('../controllers/Household');

// Rutas para los hogares
router.get('/households', householdController.getAllHouseholds);
router.get('/households/:id', householdController.getHouseholdById);
router.post('/households', householdController.createHouseholdAndPerson);


module.exports = router;
