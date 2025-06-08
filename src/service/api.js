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
  updateParticipantStatus(participantId, status, reason = null) {
    const payload = { status };
    if (reason) {
      payload.reason = reason;
    }
    
    return API.put(`/daftar/${participantId}/status`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  getParticipantById(participantId) {
    return API.get(`/daftar/${participantId}`);
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
  getRegistrationsByUserId(userId) {
    return API.get(`/registrations/user/${userId}`);
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

    createPesertaFunrun(payload) {
      return API.post('/funrun/peserta', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },

    getAllPesertaFunrun(params = {}) {
      return API.get('/funrun/peserta', { params });
    },

    getPesertaFunrunById(id) {
      return API.get(`/funrun/peserta/${id}`);
    },

    updatePesertaFunrun(id, payload) {
      return API.put(`/funrun/peserta/${id}`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },

    updatePesertaFunrunStatus(id, status) {
      return API.put(`/funrun/peserta/${id}/status`, { status }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    },

    deletePesertaFunrun(id) {
      return API.delete(`/funrun/peserta/${id}`);
    },

    getPesertaFunrunStats() {
      return API.get('/funrun/stats');
    },

    getPesertaFunrunByKontingen(kontingen) {
      return API.get(`/funrun/kontingen/${kontingen}`);
    }
  };