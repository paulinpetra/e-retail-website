"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Product fetch failed");
      }
    };
    fetchProduct();
  }, [productId]);

  const handleNavigation = () => {
    router.back();
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col md:flex-row w-full text-black p-10 items-center">
      {/* Product details */}
      <div className="flex justify-center min-w-[300px] mr- w-[340px] px-4 mb-8 md:mb-0x">
        <img
          className="w-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col bg-white p-4">
        <button onClick={handleNavigation} className="underline mb-4">
          Back
        </button>
        <h1 className="mb-2 font-heading text-3xl">{product.title}</h1>
        <h3 className="text-lg font-bold">${product.price}</h3>

        <p className="text-gray-700 text-lg mb-4">{product.description}</p>
        <div className="text-sm text-gray-600 mb-2">
          Category: {product.category}
        </div>
        <div className="text-sm text-gray-600 mb-6">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>

        {/* Quantity selector */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="flex py-2 items-center font-bold text-gray-500 border border-gray-300 rounded-lg">
            <button
              className="h-full px-4 hover:bg-gray-100 focus:outline-none"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <input
              className="w-9 text-center bg-transparent border-0 focus:ring-transparent focus:outline-none"
              type="numeric"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              className="h-full px-4 hover:bg-gray-100 focus:outline-none"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to cart button */}
          <button
            className="w-full md:w-auto bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={() => console.log("Add to cart clicked")}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
