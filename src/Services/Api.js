import axios from "axios";
import { store } from "../Store/Store.jsx";

const API_URL = "https://portfoliobackend-bkaz.onrender.com/";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token && config.url.includes("/api/admin")) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 && 
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token")
    ) {
      originalRequest._retry = true;
      try {
        const token = localStorage.getItem("adminToken");
        if (token) {
          const response = await axios.post(
            `${API_URL}api/refresh-token`,
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const newToken = response.data.token;
          localStorage.setItem("adminToken", newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin";
      }
    }
    return Promise.reject(error);
  }
);

export { api };

export const API = {
  slides: {
    getAll: () => {
      return api.get("/api/slides");
    },
    create: (slide) => api.post("/api/slides", slide),
    update: (id, slide) => api.put(`/api/slides/${id}`, slide),
    delete: (id) => api.delete(`/api/slides/${id}`),
  },

  portfolio: {
    getAll: () => {
      return api.get("/api/portfolios");
    },
    create: (portfolio) => api.post("/api/portfolios", portfolio),
    update: (id, portfolio) => api.put(`/api/portfolios/${id}`, portfolio),
    delete: (id) => api.delete(`/api/portfolios/${id}`),
  },

  qualf: {
    getAll: () => {
      return api.get("/api/qualfs");
    },
    getByCategory: (category) => {
      return api.get(`/api/qualfs/${category}`);
    },
    create: (qualf) => api.post("/api/qualfs", qualf),
    update: (id, qualf) => api.put(`/api/qualfs/${id}`, qualf),
    delete: (id) => api.delete(`/api/qualfs/${id}`),
  },
  contact: {
    getAll: () => {
      return api.get("/api/contacts");
    },
    update: (id, contact) => api.put(`/api/contacts/${id}`, contact),
  },

  messages: {
    create: (message) => api.post("/api/messages", message),
    delete: (id) => api.delete(`/api/messages/${id}`),
  },
};
