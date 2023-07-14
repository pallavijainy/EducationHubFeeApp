const express = require("express");
const { Connection } = require("./config/db");

const app = express();

app.get("/", async (req, res) => {
  res.send("pallavi");
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
