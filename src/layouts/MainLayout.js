"use client";
import React from "react";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { theme } = useSelector((state) => state.preferences);

  return <div className={theme}>{children}</div>;
};

export default MainLayout;
