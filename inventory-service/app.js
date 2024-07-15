const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const inventoryRoutes = require("./routes/inventoryRoutes");
const rabbitMQ = require("./config/rabbitMQ");
const inventoryController = require("./controllers/inventoryController");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", inventoryRoutes);

rabbitMQ.consumeMessages(inventoryController.updateInventory);

app.listen(3001, () => {
  console.log("Inventory Service Running on port 3001");
});

module.exports = app;
