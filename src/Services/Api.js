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
      } catch (refreshError) {
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
      const lang = store.getState().language.lang;
      return api.get(`/slides/${lang}`);
    },
    create: (slide) => api.post("/slides", slide),
    update: (id, slide) => api.put(`/slides/${id}`, slide),
    delete: (id) => api.delete(`/slides/${id}`),
  },

  portfolio: {
    getAll: () => {
      const lang = store.getState().language.lang;
      return api.get(`/portfolios/${lang}`);
    },
    create: (portfolio) => api.post("/portfolios", portfolio),
    update: (id, portfolio) => api.put(`/portfolios/${id}`, portfolio),
    delete: (id) => api.delete(`/portfolios/${id}`),
  },

  qualf: {
    getAll: () => {
      const lang = store.getState().language.lang;
      return api.get(`/qualfs/${lang}`);
    },
    getByCategory: (category) => {
      const lang = store.getState().language.lang;
      return api.get(`/qualfs/${category}/${lang}`);
    },
    create: (qualf) => api.post("/qualfs", qualf),
    update: (id, qualf) => api.put(`/qualfs/${id}`, qualf),
    delete: (id) => api.delete(`/qualfs/${id}`),
  },
  contact: {
    getAll: () => {
      return api.get("/contacts");
    },
    update: (id, contact) => api.put(`/contacts/${id}`, contact),
  },

  messages: {
    create: (message) => api.post("/messages", message),
    delete: (id) => api.delete(`/messages/${id}`),
  },
};
