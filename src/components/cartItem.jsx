"use client";

import { useDispatch } from "react-redux";
import { removeItem, editItem } from "@/redux/cartSlice";
import { useState } from "react";

function CartItem({ img, imgAlt, title, price, cartID, amount }) {
  const dispatch = useDispatch();
  const [inputAmount, setInputAmount] = useState(amount);
  const [totalAfterCalc, setTotalAfterCalc] = useState(price * amount);

  function handleRemove(cartID) {
    dispatch(removeItem(cartID));
  }

  function handleAmountChange(e) {
    const newAmount = Number(e.target.value);
    setInputAmount(newAmount);
    setTotalAfterCalc(newAmount * price);

    dispatch(editItem({ cartID, amount: newAmount }));
  }

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
      <img
        src={img}
        alt={imgAlt}
        className="h-16 w-16 flex-none rounded-sm object-contain"
      />

      <div className="flex-grow">
        <h5 className="text-md font-semibold">{title}</h5>
        <p className="text-gray-500">${price.toFixed(2)}</p>
      </div>

      <input
        type="number"
        className="w-20 p-1 border rounded border-gray-300 text-center"
        value={inputAmount}
        min={1}
        onChange={handleAmountChange}
      />
      <div>
        <div className="text-lg font-semibold">
          Total: {totalAfterCalc.toFixed(2)}
        </div>
        <button
          onClick={() => handleRemove(cartID)}
          className="underline text-slate-400"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
