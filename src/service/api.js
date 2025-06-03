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
  },

  getAllBerita() {
    return API.get('/berita');
  },

  getBeritaByID(id) {
    return API.get(`/berita/${id}`);
  },

  createBerita(formData) {
    return API.post('/berita/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    });
  },

  updateBerita(id, formData) {
    return API.put(`/berita/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    });
  },

  deleteBerita(id) {
    return API.delete(`/berita/${id}`);
  },
  
};
