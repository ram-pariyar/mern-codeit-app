"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "@/redux/features/productFilterSlice";

const ProductSort = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.productFilter);

  function sortProducts(sort) {
    dispatch(setFilter({ ...filter, sort }));
    router.push(`?filter=${JSON.stringify({ ...filter, sort })}`);
  }
  return (
    <select
      onChange={(event) => {
        sortProducts(event.target.value);
      }}
      defaultValue={JSON.stringify({ createdAt: -1 })}
      className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={JSON.stringify({ createdAt: -1 })}>Sort By: Latest</option>
      <option value={JSON.stringify({ name: 1 })}>Sort By Name: A-Z</option>
      <option value={JSON.stringify({ name: -1 })}>Sort By Name: Z-A</option>
      <option value={JSON.stringify({ price: 1 })}>
        Sort By Price: Low-High
      </option>
      <option value={JSON.stringify({ price: -1 })}>
        Sort By Price: High-Low
      </option>
    </select>
  );
};

export default ProductSort;
