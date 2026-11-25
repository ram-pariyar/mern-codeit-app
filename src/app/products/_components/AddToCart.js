"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from "react-toastify";
function AddToCart({ product }) {
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addToCart(product));
    toast.info(`${product.name} added to cart.`);
  };
  return (
    <button
      onClick={addProductToCart}
      className="bg-primary w-full px-5 py-2 text-white rounded-xl"
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;
