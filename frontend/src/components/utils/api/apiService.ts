import axios from "axios";

export const apiService = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL ?? "" + "/api",
  headers: {
    "Content-type": "application/json",
  },
});
