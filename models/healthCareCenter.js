const mongoose = require('mongoose');

// Your existing schema definition
const healthCareCenterSchema = new mongoose.Schema({
    centerId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    },
    createdAt: { type: Date, default: Date.now }
});

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.HealthCareCenter || mongoose.model('HealthCareCenter', healthCareCenterSchema);
