import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Assuming the backend is running on port 8000
});

export const getDecades = () => {
  return apiClient.get('/api/decades');
};

export const predictDigit = (imageData) => {
  return apiClient.post('/predict', { image_data: imageData });
};

export const askEliza = (message) => {
  return apiClient.post('/api/eliza/chat', { message });
};
