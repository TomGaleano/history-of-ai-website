import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Assuming the backend is running on port 8000
});

export const getDecades = () => {
  return apiClient.get('/api/decades');
};
