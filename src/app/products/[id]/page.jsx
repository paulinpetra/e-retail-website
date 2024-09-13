"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/productsSlice";
import { updateCartQuantity, setQuantity, addToCart } from "@/redux/cartSlice";

export default function IndividualProductPage() {
  const params = useParams();
  const productId = params.id;
  const router = useRouter();
  const dispatch = useDispatch();

  const { product, status, error, quantity } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(productId));
  }, [dispatch, productId]);

  const handleNavigation = () => {
    router.back();
  };

  // Handle loading and error states
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "failed") {
    return <h1>Error: {error}</h1>;
  }

  // Render product details only when product is available
  if (!product) {
    return <h1>No product found</h1>;
  }

  return (
    <div className="flex flex-col md:flex-row w-full text-black p-10 items-center">
      {/* Product details */}
      <div className="flex justify-center min-w-[300px] mr- w-[340px] px-4 mb-8 md:mb-0">
        {product.image ? (
          <img
            className="w-full object-cover"
            src={product.image}
            alt={product.title}
          />
        ) : (
          <div className="w-full bg-gray-200 flex items-center justify-center">
            <span>No image available</span>
          </div>
        )}
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
              onClick={() =>
                dispatch(
                  updateCartQuantity({ id: productId, quantity: quantity - 1 })
                )
              }
            >
              -
            </button>
            <input
              className="w-9 text-center bg-transparent border-0 focus:ring-transparent focus:outline-none"
              type="numeric"
              value={quantity}
              onChange={(e) => dispatch(setQuantity(Number(e.target.value)))}
            />
            <button
              className="h-full px-4 hover:bg-gray-100 focus:outline-none"
              onClick={() =>
                dispatch(
                  updateCartQuantity({ id: productId, quantity: quantity + 1 })
                )
              }
            >
              +
            </button>
          </div>

          {/* Add to cart button */}
          <button
            className="w-full md:w-auto bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={() => dispatch(addToCart({ id: productId, quantity }))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
