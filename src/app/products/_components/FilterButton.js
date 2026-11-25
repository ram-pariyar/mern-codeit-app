"use client";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { toggleFilter } from "@/redux/features/productFilterSlice";
import { useDispatch } from "react-redux";

const FilterButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(toggleFilter());
      }}
      className="flex gap-2 items-center mx-auto px-3.5 py-2 text-slate-900 text-sm rounded-md cursor-pointer bg-white border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:border-neutral-700 w-full"
    >
      <FaFilter />
      Filter
    </button>
  );
};

export default FilterButton;
