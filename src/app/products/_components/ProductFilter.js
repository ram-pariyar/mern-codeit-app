"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "@/redux/features/productFilterSlice";
import { useRouter } from "next/navigation";
import { setFilter } from "@/redux/features/productFilterSlice";

const ProductFilter = ({ categories, brands }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { showFilter, filter } = useSelector((state) => state.productFilter);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();
  const [search, setSearch] = useState("");

  function handleBrandsFilter(brand) {
    // checked brand add to list
    // rechecking the brand, remove from list
    // don't create the brands list on selecting an item
    setBrandsFilter((prev) => {
      return prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand];
    });
  }

  function filterProducts() {
    console.log("filter product");
    const filterData = {
      category: categoryFilter,
      brands: brandsFilter.join(","),
      name: search,
      min: minPriceFilter,
      max: maxPriceFilter,
    };
    dispatch(setFilter({ ...filter, ...filterData }));
    router.push(`?filter=${JSON.stringify({ ...filter, ...filterData })}`);
  }

  function clearFilters() {
    setFilter({});
    router.push(`?filter=`);
    dispatch(toggleFilter());
  }

  return (
    <div
      className={`${showFilter ? "fixed" : "hidden"} inset-0  flex-wrap justify-center items-center w-full h-full z-[1000] fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.5)] transition-all ease-in-out`}
    >
      <div className="w-full max-w-sm bg-white shadow-lg relative ml-auto h-screen outline-none transform translate-x-0 transition-transform duration-300 ease-in-out dark:bg-neutral-800">
        <div className="overflow-auto p-6 h-[calc(100vh-66px)]">
          <div className="flex items-center border-b border-slate-300 pb-3 mb-6 dark:border-neutral-700">
            <h2
              id="filter-heading"
              className="text-slate-900 text-lg font-semibold dark:text-slate-50"
            >
              Filter
            </h2>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm text-red-500 font-semibold ml-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              Clear all
            </button>
          </div>
          <div>
            {/* Name */}
            <fieldset>
              <legend className="text-slate-900 text-sm font-semibold dark:text-slate-50">
                Search
              </legend>
              <div className="mt-2" role="search" aria-label="Search category">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-white dark:bg-neutral-800 outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                  <label htmlFor="category-search" className="sr-only">
                    Search...
                  </label>
                  <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search..."
                    onChange={(event) => setSearch(event.target.value)}
                    className="text-sm text-slate-900 dark:text-slate-50 w-full outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    className="size-4 fill-slate-400 ml-auto"
                    aria-hidden="true"
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                  </svg>
                </div>
              </div>
            </fieldset>

            <hr className="my-6 border-slate-300 dark:border-neutral-700" />
            {/* Category */}
            <fieldset>
              <legend className="text-slate-900 text-sm font-semibold dark:text-slate-50">
                Category
              </legend>

              <div className="max-w-sm mx-auto">
                <select
                  id="categories"
                  onChange={(event) => {
                    setCategoryFilter(event.target.value);
                  }}
                  className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={""}>Choose category</option>
                  {categories.map((category, idx) => (
                    <option key={idx} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <hr className="my-6 border-slate-300 dark:border-neutral-700" />
            {/* Brand */}
            <fieldset>
              <legend className="text-slate-900 text-sm font-semibold dark:text-slate-50">
                Brand
              </legend>
              <ul className="mt-6 space-y-2" aria-label="Brand options">
                {brands.map((brand, idx) => (
                  <li key={idx}>
                    <label
                      htmlFor={brand}
                      className="inline-flex items-center gap-2 group"
                    >
                      <input
                        type="checkbox"
                        id={brand}
                        name="brand"
                        defaultValue={brand}
                        onChange={(event) =>
                          handleBrandsFilter(event.target.value)
                        }
                      />

                      <span className="text-sm text-slate-900 dark:text-slate-50">
                        {brand}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
            <hr className="my-6 border-slate-300 dark:border-neutral-700" />
            {/* Price */}
            <fieldset>
              <legend
                id="price-heading"
                className="text-slate-900 text-sm font-semibold dark:text-slate-50"
              >
                Price
              </legend>

              <div className="flex gap-2">
                <div className="max-w-sm mx-auto">
                  <label
                    htmlFor="min-input"
                    className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Min price:
                  </label>
                  <input
                    type="number"
                    id="min-input"
                    onChange={(event) => setMinPriceFilter(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={1000}
                  />
                </div>
                <div className="max-w-sm mx-auto">
                  <label
                    htmlFor="max-input"
                    className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Max price:
                  </label>
                  <input
                    type="number"
                    id="max-input"
                    onChange={(event) => setMaxPriceFilter(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={100000}
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="p-4 flex gap-2 absolute bottom-0 w-full border-t border-slate-300 bg-white dark:bg-neutral-800 dark:border-neutral-700">
          <button
            type="button"
            onClick={filterProducts}
            className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 border border-blue-600 transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Apply
          </button>
          <button
            type="button"
            id="closeDrawer"
            onClick={() => {
              dispatch(toggleFilter());
            }}
            className="w-full px-3.5 py-2 text-slate-900 text-sm font-semibold rounded-md cursor-pointer bg-white border border-slate-300 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-slate-50 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:border-neutral-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
