import React from "react";
import {
  increaseQunatity,
  decreaseQunatity,
} from "../../../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";

const Test = ({ product }) => {
  const dispatch = useDispatch();
  const increaseProductQuantity = () => {
    dispatch(decreaseQunatity(product._id));
  };

  return (
    <button
      type="button"
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      onClick={increaseProductQuantity}
    >
      <FaPlus />
    </button>
  );
};

export default Test;
