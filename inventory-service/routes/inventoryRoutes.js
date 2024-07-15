const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/inventory", inventoryController.getInventory);
router.post(
  "/inventory/update-quantity",
  inventoryController.updateProductQuantity
);

module.exports = router;
