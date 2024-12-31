import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Defina baseUrl
const baseUrl = 'http://localhost:8000/api';

// Verifique se você está em ambiente de servidor (SSR) e use uma função de fetch personalizada
const customFetch: (input: RequestInfo, init?: RequestInit) => Promise<Response> = (input, init) => {
  if (typeof window === "undefined") {
    // Para SSR, use o fetch global (Node.js)
    return globalThis.fetch(input, init);
  }
  // Para o cliente, use o fetch padrão
  return fetch(input, init);
};

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ["Categories", "CastMembers"],
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({ baseUrl, fetchFn: customFetch }), // Usando o customFetch para SSR
});
