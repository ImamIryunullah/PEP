import axios from "axios";

const baseURL = "http://localhost:8080";

const API = axios.create({
  baseURL: baseURL,
});

export default {
  registerPeserta(formData) {
    return API.post('/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }); 
  },

  login(payload) {
    return API.post('/login', payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
