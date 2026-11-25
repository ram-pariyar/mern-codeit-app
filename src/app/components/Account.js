"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ACCOUNT_ROUTE,
  DASHBOARD_ROUTE,
  ORDERS_ROUTE,
} from "@/app/constants/routes";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ROLE_CUSTOMER } from "../constants/userRoles";
import Link from "next/link";
import Logout from "./Logout";

const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.auth);
  const router = useRouter();

  function handleClickOutside(event) {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="relative" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Image
          src={user?.profileImageUrl ?? "/placeholder.png"}
          alt={"User"}
          height={64}
          width={64}
          className="rounded-full h-10 w-10 object-cover border-2 border-gray-500"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-4 px-3 z-10 space-y-2">
          <h4 className="text-center">{user.name}</h4>
          {user?.roles != [ROLE_CUSTOMER] && (
            <Link
              href={DASHBOARD_ROUTE}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 rounded"
            >
              Dashboard
            </Link>
          )}
          <Link
            href={ACCOUNT_ROUTE}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 rounded"
          >
            Account Settings
          </Link>
          <Link
            href={ORDERS_ROUTE}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 rounded"
          >
            My Orders
          </Link>
          <Logout />
        </div>
      )}
    </div>
  );
};

export default Account;
