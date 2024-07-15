import React, { useEffect, useState } from "react";
import axios from "axios";

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/inventory");
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory:", error);
        alert("Error fetching inventory");
      }
    };
    fetchInventory();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
      <ul className="space-y-2">
        {inventory.map((item) => (
          <li key={item.id} className="p-4 border rounded">
            <div className="font-medium">{item.product}</div>
            <div>Quantity: {item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
