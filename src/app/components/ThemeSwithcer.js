"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/features/preferencesSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwithcer = ({ children }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.preferences);

  return (
    <button
      className="flex items-center item-cente p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group "
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      {theme == "light" ? <FaMoon /> : <FaSun />}
      {children}
    </button>
  );
};

export default ThemeSwithcer;
