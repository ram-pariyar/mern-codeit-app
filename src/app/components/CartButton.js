"use client";
import Link from "next/link";
import React from "react";
import { CART_ROUTE } from "../constants/routes";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <Link href={CART_ROUTE} className="p-2 relative">
      <FaShoppingCart />
      <span className="absolute bottom-0 right-0 text-xs bg-red-600 rounded-full text-white px-1">
        {products.length}
      </span>
    </Link>
  );
};

export default CartButton;
