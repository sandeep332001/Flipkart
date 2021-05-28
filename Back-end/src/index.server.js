const express = require("express");
const env = require("dotenv");
// const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//routers

const authRoutes = require("./routes/auth");
const adminAuthRoutes = require("./routes/admin/auth");

//environment variable or you can say constants
env.config();

// mongodb connection
// mongodb+srv://sandeep030301:<password>@cluster0.z32ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.z32ik.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Databse Connected");
  });

//middleWare
app.use(express.json());
// app.use(bodyParser());

app.use("/api", authRoutes);
app.use("/api", adminAuthRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
