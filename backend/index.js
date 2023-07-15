const express = require("express");
const { Connection } = require("./config/db");
const { StudentModel } = require("./model/StudentModel");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("pallavi");
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

//make payment
app.post("/payment/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const studentdata = StudentModel.findOne({ _id: id });
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
