import axios from "axios";

const BASE_URL = "http://localhost:5001"; 
// const BASE_URL = "https://next-imdb-back-end.vercel.app";

const apiUtils = {
  get: async (endpoint, params = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`, { params });
      return response.data;
    } catch (error) {
      console.error("GET request error:", error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
        withCredentials: true, 
      });
        return response.data;
    } catch (error) {
      console.error("POST request error:", error);
      throw error;
    }
  },

  put: async (endpoint, data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("PUT request error:", error);
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${endpoint}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("DELETE request error:", error);
      throw error;
    }
  },
};

export default apiUtils;