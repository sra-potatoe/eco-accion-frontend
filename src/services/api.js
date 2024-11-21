import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // La URL de tu servidor backend
});

export const registerUser = async (userData) => {
  return api.post('/usuarios/register', userData);
};
