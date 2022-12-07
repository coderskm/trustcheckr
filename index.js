const express = require("express");

const route = require("./routes/route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sumitkm:sumitkm@123@cluster0.qycwaks.mongodb.net/test"
  )
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3010, function () {
  console.log("Express app running on port " + (process.env.PORT || 3010));
});
