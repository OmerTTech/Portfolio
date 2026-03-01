import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { store } from "./Store/Store.jsx";
import { Provider } from "react-redux";
import axios from "axios";

const API_URL = "https://portfoliobackend-bkaz.onrender.com/";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token && (config.url.includes("/api/admin") || config.url.includes("/login"))) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
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
            { headers: { Authorization: `Bearer ${token}` } }
          );
          const newToken = response.data.token;
          localStorage.setItem("adminToken", newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin";
      }
    }
    return Promise.reject(error);
  }
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
