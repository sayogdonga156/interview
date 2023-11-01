const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./routes/userRoutes");
const selectionRoute = require("./routes/selectionRoutes");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://0.0.0.0:27017/interview");

const app = express();
const con = mongoose.connection;

app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoute);
app.use("/api/v1", selectionRoute);

con.on("open", () => {
  console.log("connected successfully ✌");
});

app.listen(process.env.PORT, () =>
  console.log(`app listing on port ${process.env.PORT}`)
);
