"use client";
import { deleteProduct } from "@/api/private/products";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  function removeProduct() {
    if (confirm("Are you sure, you want to delete?")) {
      deleteProduct(id)
        .then(() => {
          toast.success("Product Removed Successfully.");
          router.refresh();
        })
        .catch((error) => toast.error(error.message));
    }
  }
  return (
    <button
      className="text-red-600 bg-red-100 p-2 rounded-lg hover:bg-red-200 cursor-pointer"
      onClick={removeProduct}
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
