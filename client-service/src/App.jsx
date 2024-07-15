import React from "react";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import InventoryList from "./components/InventoryList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Product and Inventory Management
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <CreateProduct />
        <ProductList />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Inventory</h2>
        <InventoryList />
      </div>
    </div>
  );
}

export default App;
