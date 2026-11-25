"use client";
import { createOrder } from "@/api/private/orders";
import {
  DELIVERY_CHARGE,
  DISCOUNT_PERCENT,
  TAX_PERCENT,
} from "@/app/constants/order";
import { LOGIN_ROUTE, ORDERS_ROUTE } from "@/app/constants/routes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "@/redux/features/cartSlice";
import Spinner from "@/app/components/Spinner";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { products, totalPrice } = useSelector((state) => state.cart);
  const { isAuth } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  function checkout() {
    if (!isAuth) {
      toast.info("Please login to place in order.");
      return router.push(LOGIN_ROUTE);
    }

    setLoading(true);
    const data = {
      totalPrice:
        totalPrice -
        totalPrice * DISCOUNT_PERCENT +
        totalPrice * TAX_PERCENT +
        DELIVERY_CHARGE,

      orderItems: products.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    };

    createOrder(data)
      .then((res) => {
        router.push(ORDERS_ROUTE);
        toast.success("Order Created Successfully");
        dispatch(clearCart());
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Something went wrong",
        );
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={checkout}
      className="flex w-full gap-2 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary dark:focus:ring-primary-800"
    >
      Proceed to Checkout
      {loading && <Spinner className="h-6 w-6 fill-primary" />}
    </button>
  );
};

export default Checkout;
