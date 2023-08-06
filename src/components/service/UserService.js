import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/';
const API_URL = 'https://spectacular-flan-e470d0.netlify.app/api/';

export const signUp =  (firstName, lastName, email, password) => {
  return axios.post(`${API_URL}register`, { firstName, lastName, email, password })
};

export const login = (email, password) => {
  return axios.post(`${API_URL}login`, { email, password })
};