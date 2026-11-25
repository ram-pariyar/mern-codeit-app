"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { LOGIN_ROUTE } from "../constants/routes";
import { useEffect } from "react";

const PrivateLayout = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.push(LOGIN_ROUTE);
    }
  }, []);

  if (!isAuth) return;

  return <div>{children}</div>;
};

export default PrivateLayout;
