let inventory = [];

const updateInventory = async (message) => {
  const product = JSON.parse(message);
  if (product && product.name) {
    const newInventoryItem = {
      id: generateInventoryId(),
      product: product.name,
      quantity: 100,
    };
    inventory.push(newInventoryItem);
    console.log(`Inventory updated: ${product.name}`);
  }
};

const getInventory = async (req, res) => {
  try {
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProductQuantity = async (req, res) => {
  try {
    const { id, quantity } = req.body;
    const inventoryItem = inventory.find((item) => item.id === id);
    if (inventoryItem) {
      inventoryItem.quantity = quantity;
      res.status(200).json(inventoryItem);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function generateInventoryId() {
  return inventory.length + 1;
}

module.exports = {
  updateInventory,
  getInventory,
  updateProductQuantity,
};
