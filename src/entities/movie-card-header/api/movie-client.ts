import axios from "axios";

export const movieClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "X-API-KEY": "9983ffa9-0d1e-4da8-8b89-62172123823b",
    "Content-Type": "application/json",
  },
});
