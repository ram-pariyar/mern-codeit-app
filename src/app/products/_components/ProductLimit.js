"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "@/redux/features/productFilterSlice";

const ProductLimit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.productFilter);

  function limitProducts(limit) {
    dispatch(setFilter({ ...filter, limit }));
    router.push(`?filter=${JSON.stringify({ ...filter, limit })}`);
  }

  return (
    <select
      onChange={(event) => {
        limitProducts(event.target.value);
      }}
      defaultValue={10}
      className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="10">Limit: 10</option>
      <option value="20">Limit: 20</option>
      <option value="50">Limit: 50</option>
      <option value="100">Limit: 100</option>
    </select>
  );
};

export default ProductLimit;
