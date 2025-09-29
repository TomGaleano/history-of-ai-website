import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
});

export const prologQuery = async (query) => {
  const response = await apiClient.post('/api/prolog/query', { query });
  return response.data;
};

export const predictDigit = async (imageData) => {
  const response = await apiClient.post('/predict', { image_data: imageData });
  return response.data;
};

export const askEliza = async (message) => {
  const response = await apiClient.post('/api/eliza/chat', { message });
  return response.data;
};

export const getDecades = async () => {
  const response = await apiClient.get('/api/decades');
  return response.data;
};