const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    joiningdate: String,
    name: String,
    class: String,
    school: String,
    fee: String,
    mobile: String,
    parentname: String,
    due: String,
  },
  { timestamps: true }
);

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = { StudentModel };
