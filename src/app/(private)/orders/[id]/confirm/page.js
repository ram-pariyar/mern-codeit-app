"use client";
import { confirmOrder } from "@/api/private/orders";
import Spinner from "@/app/components/Spinner";
import { ORDERS_ROUTE } from "@/app/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const OrderConfirm = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const status = searchParams.get("status");
  const router = useRouter();

  useEffect(() => {
    if (status == "Completed") {
      toast.success("Order Confirmed");
      confirmOrder(params.id, {
        status: status == "Completed" ? "SUCCESS" : status,
      })
        .then(() => {
          router.replace(ORDERS_ROUTE);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="flex text-center items-center gap-2 py-24">
      <Spinner />
      Order Confirmation Pending....
    </div>
  );
};

export default OrderConfirm;
