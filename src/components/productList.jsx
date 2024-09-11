"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./product-collection/productCard";
import { productsFetch } from "@/app/api/productsFetch";

const ProductList = () => {
  // State for the fetched products
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedProducts = await productsFetch();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      {/* Grid container for product cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Mapping over products and rendering a ProductCard for each */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
