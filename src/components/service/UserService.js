import axios from 'axios';

export const signUp =  (firstName, lastName, email, password) => {
  return axios.post("http://localhost:8080/api/register", { firstName, lastName, email, password })
};

export const login = (email, password) => {
  return axios.post("http://localhost:8080/api/login", { email, password })
};