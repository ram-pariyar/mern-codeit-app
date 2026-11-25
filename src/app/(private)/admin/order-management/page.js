"use client";

import { getAllOrders, getOrdersByMerchant } from "@/api/private/orders";
import { ROLE_ADMIN } from "@/app/constants/userRoles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import OrdersTable from "./_components/Table";

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useSelector((state) => state.auth);

  function getOrders() {
    if (user?.roles.includes(ROLE_ADMIN)) {
      return getAllOrders();
    } else {
      return getOrdersByMerchant();
    }
  }

  useEffect(() => {
    getOrders()
      .then((orders) => {
        setOrders(orders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return <OrdersTable orders={orders} />;
};

export default OrderManagementPage;
