"use client";

import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";
const ProductItem = ({
  id,
  imgSrc,
  imgAlt,
  title,
  price,
  description,
  onClick,
}) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    const amount = 1;
    const cartProduct = {
      cartID: id,
      productID: id,
      imgAlt,
      imgSrc,
      title,
      price,
      amount,
    };
    dispatch(addItem(cartProduct));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 border-gray-100 p-24 lg:px-80">
      <img src={imgSrc} alt={imgAlt}></img>
      <div className="flex flex-col m-5 gap-5 self-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{price} SEK</p>
        <p>{description}</p>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
