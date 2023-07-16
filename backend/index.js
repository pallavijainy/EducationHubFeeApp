const express = require("express");
const { Connection } = require("./config/db");
const { StudentModel } = require("./model/StudentModel");
const cors = require("cors");
const { PaymentModel } = require("./model/PaymentModel");
const app = express();
app.use(express.json());
app.use(cors());

//get all student data
app.get("/", async (req, res) => {
  try {
    const data = await StudentModel.find();
    res.send(data);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});
//get when payment done
app.get("/getpaymentdetail/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await PaymentModel.findOne({ _id: id }).populate("student", [
      "name",
      "due",
      "fee",
    ]);

    res.send(data);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

//get student for payment
app.get("/payment/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const studentdata = await StudentModel.findOne({ _id: id });
    console.log(studentdata);
    res.send(studentdata);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

//add student
app.post("/newstudentadd", async (req, res) => {
  const newstudent = req.body;
  try {
    const data = new StudentModel(newstudent);
    await data.save();
    res.send("New student Added");
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

//payment
app.post("/paid", async (req, res) => {
  const { studentId, feepaid } = req.body;
  try {
    const newpaid = new PaymentModel({
      student: studentId,
      feepaid: feepaid,
    });
    await newpaid.save();
    res.send(newpaid);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

// Due Payment update

app.patch("/due/:id", async (req, res) => {
  const id = req.params.id;
  const due = req.body;
  try {
    await StudentModel.findByIdAndUpdate({ _id: id }, due);
    res.send("update");
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

//reciept of single person
app.get("/reciept/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const allpayment = await PaymentModel.find({ student: id })
      .populate("student", ["name", "due"])
      .sort({ createdAt: -1 });
    res.send(allpayment);
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

app.listen(8080, async () => {
  try {
    await Connection;
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
  console.log("listening at port 8080");
});
