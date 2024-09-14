"use client";

import CartItem from "@/components/cartItem";
import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, orderTotal } = useSelector((state) => state.cart);

  if (cartItems.length <= 0) {
    return (
      <div className="font-bold text-lg grid place-content-center align-middle h-full">
        Your cart is empty!
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-[65%] flex flex-col gap-4">
          <h2 className="font-bold text-3xl mb-4">Your Cart:</h2>
          {cartItems.map((product) => (
            <CartItem
              key={product.cartID}
              img={product.imgSrc}
              imgAlt={product.imgAlt}
              title={product.title}
              price={product.price}
              cartID={product.cartID}
              amount={product.amount}
            />
          ))}
        </div>
        <div className="w-full md:w-[35%] flex flex-col gap-6">
          <div className="h-16 w-full flex items-center justify-center border border-slate-300 bg-white text-lg font-semibold rounded-lg">
            Cart Total: ${orderTotal.toFixed(2)}
          </div>
          <button className="h-16 w-full bg-cyan-800 hover:bg-cyan-500 active:bg-cyan-400 text-white rounded-lg shadow-lg flex justify-center items-center gap-4 hover:scale-105 ease-in-out duration-200">
            Click to checkout <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
