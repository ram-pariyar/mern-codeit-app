"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DASHBOARD_ROUTE, HOME_ROUTE } from "../constants/routes";
import { ROLE_ADMIN } from "../constants/userRoles";

function layout({ children }) {
  const { user, isAuth } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      if (user?.roles.includes(ROLE_ADMIN)) {
        router.push(DASHBOARD_ROUTE);
      } else {
        router.push(HOME_ROUTE);
      }
    }
  }, [isAuth]);

  return (
    <section className="px-20 flex flex-col items-center justify-center">
      <div className="py-4 px-4 container">
        <div className="grid items-center gap-6  w-full lg:grid-cols-2">
          {children}
          <div className="aspect-[71/50] max-lg:w-4/5 mx-auto">
            <img
              src="https://readymadeui.com/images/integration-illus.webp"
              className="w-full object-cover"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default layout;
