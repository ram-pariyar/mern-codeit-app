"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        className="absolute p-2 right-2 top-1"
      >
        {isVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
      <input
        type={isVisible ? "text" : "password"}
        id="password"
        placeholder="••••••••"
        required
        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
        {...props}
      />
    </div>
  );
};

export default Password;
