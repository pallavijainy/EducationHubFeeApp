const mongoose = require("mongoose");

const Connection = mongoose.connect(
  "mongodb+srv://pallavifeeapp:pallavifeeapp@cluster0.vjkiodk.mongodb.net/edufeeapp?retryWrites=true&w=majority"
);

module.exports = { Connection };
