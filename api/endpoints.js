// src/api/endpoints.js

// Base paths for different environments
const API_VERSION = "/api"; // Define the API version here, if needed

// Define API endpoints
const ENDPOINTS = {
  // User-related endpoints
  LOGIN: `${API_VERSION}/auth/login`,
  REGISTER: `${API_VERSION}/auth/register`,
  GET_USER: (userId) => `${API_VERSION}/users/${userId}`, // Dynamic URL with user ID
  UPDATE_USER: (userId) => `${API_VERSION}/users/${userId}`,
  GET_TEAMS: `${API_VERSION}/teams-list`, // Dynamic URL with user ID

  // Product-related endpoints
  GET_PRODUCTS: `${API_VERSION}/products`,
  GET_PRODUCT_DETAILS: (productId) => `${API_VERSION}/products/${productId}`,
  CREATE_PRODUCT: `${API_VERSION}/products`,
  UPDATE_PRODUCT: (productId) => `${API_VERSION}/products/${productId}`,
  DELETE_PRODUCT: (productId) => `${API_VERSION}/products/${productId}`,

  // Order-related endpoints
  CREATE_ORDER: `${API_VERSION}/orders`,
  GET_ORDER: (orderId) => `${API_VERSION}/orders/${orderId}`,
  GET_ALL_ORDERS: `${API_VERSION}/orders`,
};

export default ENDPOINTS;
