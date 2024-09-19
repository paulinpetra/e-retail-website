//This component renders an individual product’s details and provides an "Add to Cart" button.
//When clicked, it dispatches the addItem action to add the product to the cart in the Redux store.
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";

const ProductItem = ({ id, imgSrc, imgAlt, title, price, description }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  //This uses Redux's dispatch function to send the addItem action to the store,
  //passing the prepared cartProduct object as payload.
  const addToCart = () => {
    setIsAdding(true);
    const amount = 1; // quantity to add to the cart
    const cartProduct = {
      // Data for the product being added to the cart
      cartID: id,
      productID: id,
      imgAlt,
      imgSrc,
      title,
      price,
      amount,
    };
    dispatch(addItem(cartProduct));
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 border-gray-100 p-24 lg:px-80">
      <img src={imgSrc} alt={imgAlt}></img>
      <div className="flex flex-col m-5 gap-5 self-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 font-bold text-xl">{price} $</p>
        <p>{description}</p>
        <button
          className={`py-2 px-4 font-semibold rounded shadow border 
            ${
              isAdding
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-800 border-gray-400"
            }`}
          onClick={addToCart}
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Add to cart"}{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
