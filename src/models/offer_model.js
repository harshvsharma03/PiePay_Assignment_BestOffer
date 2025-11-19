const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
    offerId: String,
    description: String,
    discountType: String,
    discountValue: Number,
    maxCap: Number,
    instrument: String,
    bank: String
});

module.exports = mongoose.model("Offer", offerSchema);
