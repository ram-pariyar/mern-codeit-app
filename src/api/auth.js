import config from "@/app/config/config";
import axios from "axios";

export const login = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, data);
  return response;
};
export const signUp = async (data) => {
  // register api request
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, data);
  return response;
};

export const logout = async () => {
  await axios.post(`${config.apiUrl}/api/auth/logout`);
};

export const forgotPassword = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/forgot-password`, data);
};

export const resetPassword = async (data) => {
  return await axios.post(`${config.apiUrl}/api/auth/reset-password`, data);
};
