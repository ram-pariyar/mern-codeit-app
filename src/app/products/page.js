import React from "react";
import ProductCard from "./_components/ProductCard";
import { getBrands, getCategories, getProducts } from "@/api/products";
import ProductSort from "./_components/ProductSort";
import ProductLimit from "./_components/ProductLimit";
import FilterButton from "./_components/FilterButton";
import ProductFilter from "./_components/ProductFilter";

async function ProductPage({ searchParams }) {
  const query = await searchParams;
  const products = await getProducts(query);
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <section
      id="clothes"
      className="py-16 bg-primary/5 dark:bg-gray-950 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <div className="items-center grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_auto_auto]">
          <h2 className="text-center text-3xl font-semibold">
            Popular Products
          </h2>
          <ProductSort />
          <ProductLimit />
          <FilterButton />
        </div>

        <ProductFilter categories={categories} brands={brands} />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
