"use client";
import React from "react";
import ProductBanner from "./_components/ProductBanner";

function ProductsLayout({ children }) {
  return (
    <div>
      <ProductBanner />
      {children}
    </div>
  );
}

export default ProductsLayout;
