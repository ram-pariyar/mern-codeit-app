"use client";
import { DASHBOARD_ROUTE, HOME_ROUTE } from "@/app/constants/routes";
import { ROLE_ADMIN } from "@/app/constants/userRoles";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserManagementLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user?.roles.includes(ROLE_ADMIN)) {
      router.push(DASHBOARD_ROUTE);
    }
  }, []);

  if (user == null) return;

  return <div>{children}</div>;
};

export default UserManagementLayout;
