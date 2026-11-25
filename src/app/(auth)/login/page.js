"use client";
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from "@/app/constants/routes";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { login } from "@/api/auth.js";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Password from "../_components/Password";
import Spinner from "@/app/components/Spinner";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/features/authSlice";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const router = useRouter();

  function submitForm(data) {
    setLoading(true);
    login(data)
      .then((res) => {
        dispatch(loginUser(res.data));
        localStorage.setItem("authToken", res.data.token);
        toast.success("Login Successfull");
      })
      .catch((error) => toast.error(error?.response.data?.message))
      .finally(() => setLoading(false));
  }

  return (
    <div className="border border-slate-300 rounded-lg p-6 max-w-md mx-auto shadow-sm md:p-8 lg:mx-0 dark:border-neutral-700">
      <div className="mb-8">
        <h1 className="text-slate-900 text-3xl font-bold mb-4 dark:text-slate-50">
          Sign in
        </h1>
        <p className="text-slate-600 text-base leading-relaxed dark:text-slate-400">
          Sign in to your account to access your dashboard and manage your
          projects.
        </p>

        {/* Error Message */}
        {errors.password && (
          <p className="bg-red-100 border-red-700 border rounded px-4 py-1 text-red-700 mt-4">
            {errors.password?.message}
          </p>
        )}
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label
            htmlFor="email"
            className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@readymadeui.com"
            required
            className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"
            {...register("email")} // register -> name, reference, onchange, onblur
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
          >
            Password
          </label>
          <Password
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be greater than 8.",
              },
            })}
          />
        </div>
        <div className="flex items-start flex-wrap gap-2">
          <label className="flex items-center group has-[input:checked]:text-slate-900">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="sr-only"
            />
            {/* Custom box */}
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700
                           bg-white dark:bg-neutral-800
                           group-has-[input:checked]:bg-blue-600
                           group-has-[input:checked]:outline-blue-600
                           group-focus-within:outline-2
                           group-focus-within:outline-blue-600"
              aria-hidden="true"
            >
              {/* Checkmark */}
              <svg
                className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                viewBox="0 0 12 10"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M1 5l3 3 7-7" />
              </svg>
            </span>
            <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
              Remember me
            </span>
          </label>
          <Link
            href={FORGOT_PASSWORD_ROUTE}
            className="ml-auto text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Sign in
          {loading && <Spinner className="w-4 h-8 fill-primary" />}
        </button>
        <div className="text-slate-900 text-sm text-center dark:text-slate-50">
          Don't have an account?{" "}
          <Link
            href={REGISTER_ROUTE}
            className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
