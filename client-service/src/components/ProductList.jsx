import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        alert("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded">
            <div className="font-medium">{product.name}</div>
            <div>${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
