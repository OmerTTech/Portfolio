import axios from "axios";
import { store } from "../Store/Store.jsx";

const API_URL = "https://portfoliobackend-bkaz.onrender.com/";

export const api = axios.create({
  baseURL: API_URL,
});

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
