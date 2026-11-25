import React from "react";
import Image from "next/image";

function ProductBanner() {
  return (
    <div className="relative h-80">
      <Image
        src={"/banner.png"}
        alt="banner"
        width={1000}
        height={1000}
        loading="eager"
        className="h-80 absolute top-0 left-0 w-full object-cover"
      />
      <Image
        src={"/iphone18.jpg"}
        alt="banner-image"
        height={200}
        width={250}
        loading="eager"
        className="absolute top-[-60px] w-auto p-10"
      />
      <h1 className="z-10 relative text-center flex items-center justify-center h-full text-7xl font-bold text-white shadow-lg">
        Iphone 18 PRO
      </h1>
    </div>
  );
}

export default ProductBanner;
