"use client";
import { HOME_ROUTE } from "@/app/constants/routes";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ROLE_ADMIN, ROLE_MERCHANT } from "@/app/constants/userRoles";
import Sidebar from "./_components/Sidebar";

function AdminLayout({ children }) {
  const { user, isAuth } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (
      !user?.roles.includes(ROLE_ADMIN) &&
      !user?.roles.includes(ROLE_MERCHANT)
    ) {
      router.push(HOME_ROUTE);
    }
  }, []);

  if (user == null) return;
  return (
    <div>
      <Sidebar userRoles={user?.roles} />
      <div className="px-4 py-3 sm:py-5 sm:ml-64 bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
