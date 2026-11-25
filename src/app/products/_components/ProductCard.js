import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_ROUTE } from "@/app/constants/routes";
import AddToCart from "./AddToCart";

function ProductCard({ product }) {
  const { name, brand, price, imageUrls, _id } = product;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
      <Link href={`${PRODUCTS_ROUTE}/${_id}`}>
        <Image
          src={imageUrls.length > 0 ? imageUrls[0] : "/placeholder.jpg"}
          alt={name}
          className="w-full h-64 object-cover hover:scale-105 transition-all duration-300"
          height={400}
          width={600}
          loading="eager"
        />
      </Link>
      <div className="px-5 py-5">
        <span className="bg-primary text-white text-sm px-3 py-0.5 rounded-xl">
          {brand}
        </span>
        <Link href={`${PRODUCTS_ROUTE}/${_id}`}>
          <h4 className="font-medium text-xl">{name}</h4>{" "}
        </Link>
        <p>
          ⭐️⭐️⭐️⭐️⭐️ <span className="text-sm">(326 reviews)</span>
        </p>
        <h5 className="text-primary text-2xl font-semibold my-2">
          Rs. {price}
        </h5>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
