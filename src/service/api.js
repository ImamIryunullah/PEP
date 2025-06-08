import axios from "axios";

const baseURL = "http://localhost:8080";

const API = axios.create({
  baseURL: baseURL,
});

API.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.data);
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default {
  submitParticipantRegistration(formData) {
    return API.post('/daftar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }); 
  },

  getParticipants() {
    return API.get('/daftar');
  },  
    updateParticipantRegistration(id, formData) {
      return API.put(`/daftar/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    },
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
  }
};
