"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  function goBack() {
    router.back();
  }
  return (
    <button
      className="inline-flex items-center gap-2 text-gray-700 mb-4 cursor-pointer"
      onClick={goBack}
    >
      <FaArrowLeft /> Back
    </button>
  );
};

export default BackButton;
