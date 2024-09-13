"use client";
import React, { useEffect } from "react";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, addToCart } from "@/redux/ProductsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, quantity: 1 }));
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
        {products.map((product) => (
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
