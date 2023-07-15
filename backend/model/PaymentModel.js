const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    student: { type: mongoose.Schema.type.ObjectId, ref: "Student" },
    feepaid: String,
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model("payment", PaymentSchema);

module.exports = { PaymentModel };
