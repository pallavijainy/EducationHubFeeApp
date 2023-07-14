const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({}, { timestamps: true });

const PaymentModel = mongoose.model("payment", PaymentSchema);

module.exports = { PaymentModel };
