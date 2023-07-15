const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "students" },
    feepaid: String,
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model("payments", PaymentSchema);

module.exports = { PaymentModel };
