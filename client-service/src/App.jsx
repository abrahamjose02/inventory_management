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
        
        <CreateProduct />
        <ProductList />
      </div>

      <div>
        
        <InventoryList />
      </div>
    </div>
  );
}

export default App;
