"use client";
import React, { useEffect } from "react";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@/redux/productsSlice";
import { addItem } from "@/redux/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addItem({ id: product.id, quantity: 1 }));
  };

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "failed") {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      {/* Grid container for product cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Mapping over products and rendering a ProductCard for each */}
        {items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
