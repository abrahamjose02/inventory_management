const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const rabbitMQ = require("./config/rabbitMQ");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  req.rabbitMQ = rabbitMQ;
  next();
});

app.use("/", productRoutes);

app.listen(3000, () => {
  console.log("Producer Service running on 3000 ");
});
