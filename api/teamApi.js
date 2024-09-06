// src/api/userApi.js
import apiClient from "./apiClient";
import ENDPOINTS from "./endpoints";

export const getTeams = async () => {
  try {
    const response = await apiClient.get(ENDPOINTS.GET_TEAMS);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
