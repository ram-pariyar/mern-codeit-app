"use client";
import api from "./api";

// export const addProduct = async (data) => {
//   const token = localStorage.getItem("authToken");
//   return await axios.post(`${config.apiUrl}/api/products`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const deleteProduct = async (id) => {
//   const token = localStorage.getItem("authToken");
//   return await axios.delete(`${config.apiUrl}/api/products/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const updateProduct = async (id, data) => {
//   const token = localStorage.getItem("authToken");
//   return await axios.put(`${config.apiUrl}/api/products/${id}`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

export const addProduct = async (data) => {
  return await api.post(`/api/products`, data);
};

export const deleteProduct = async (id) => {
  return await api.delete(`/api/products/${id}`);
};

export const updateProduct = async (id, data) => {
  return await api.put(`/api/products/${id}`, data);
};
