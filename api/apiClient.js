// src/api/apiClient.js
import axios from "axios";

// Create an Axios instance with default configuration
console.log(process.env.REACT_APP_API_BASE_URL);
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/", // Base URL of your API
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default headers for requests
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add Authorization header if a token is available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response, // Simply return the response data
  (error) => {
    // Handle response errors
    if (error.response) {
      // You can check for specific error status codes here
      if (error.response.status === 401) {
        // Handle unauthorized errors, e.g., redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
