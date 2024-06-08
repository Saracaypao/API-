const mongoose = require('mongoose');

const houseHoldSchema = new mongoose.Schema({
    canton: {
        type: String,
        required: true
    },
    housingType: {
        type: String,
        required: true
    },
    riskLevel: {
        type: String,
        required: true
    },
    latitude: {
        type: Number, // Campo para almacenar la latitud
        required: true
    },
    longitude: {
        type: Number, // Campo para almacenar la longitud
        required: true
    },
    members: [{
        dui: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        birthDate: {
            type: Date,
            required: true
        },
        educationLevel: {
            type: String,
            required: true
        },
        literacy: Boolean
    }]
});

module.exports = mongoose.model('houseHold', houseHoldSchema);
