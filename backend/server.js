const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const ClothController = require("./controller/Cloth");

const app = express();

app.use(cors());

mongoURI =
  "mongodb+srv://harishmodi129:harish129@dummycluster.c1genco.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("connected to mongodb"))
  .catch((error) => {
    console.log("can not connect with mongodb");
  });

app.get("/getclothdata", ClothController.GetDataOfCloth);
app.get("/searchcloth", ClothController.SearchCloth);

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
