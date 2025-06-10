import axios from "axios";

const baseURL = "http://localhost:8080";

const API = axios.create({
  baseURL: baseURL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json'
  }
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
    console.log('Response received:', response.status);   
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    
    if (error.code === 'ECONNABORTED') {
      error.message = 'Request timeout - server tidak merespons';
    } else if (error.code === 'ERR_NETWORK') {
      error.message = 'Network error - tidak dapat terhubung ke server';
    } else if (error.response) {
  
      const status = error.response.status;
      switch (status) {
        case 404:
          error.message = 'Endpoint tidak ditemukan';
          break;
        case 500:
          error.message = 'Server error';
          break;
        case 503:
          error.message = 'Server sedang maintenance';
          break;
        default:
          error.message = `Server error: ${status}`;
      }
    }
    
    return Promise.reject(error);
  }
);

export default {

  async testConnection() {
    try {
      const response = await API.get('/health');
      return response;
    } catch (error) {
      console.error('Connection test failed:', error);
      throw error;
    }
  },

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
    
    return API.put(`/daftar/${participantId}/status`, payload);
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
    return API.post('/login', payload);
  },

  getAllBerita() {
    return API.get('/berita/');
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

  // Fun run endpoints
  createPesertaFunrun(payload) {
    return API.post('/funrun/peserta', payload);
  },

  getAllPesertaFunrun(params = {}) {
    return API.get('/funrun/peserta', { params });
  },

  getPesertaFunrunById(id) {
    return API.get(`/funrun/peserta/${id}`);
  },

  updatePesertaFunrun(id, payload) {
    return API.put(`/funrun/peserta/${id}`, payload);
  },

  updatePesertaFunrunStatus(id, status) {
    return API.put(`/funrun/peserta/${id}/status`, { status });
  },

  deletePesertaFunrun(id) {
    return API.delete(`/funrun/peserta/${id}`);
  },

  getPesertaFunrunStats() {
    return API.get('/funrun/stats');
  },

  getPesertaFunrunByKontingen(kontingen) {
    return API.get(`/funrun/kontingen/${kontingen}`);
  },

  createKnockoutMatch(payload) {
    return API.post('/knockout/', payload);
  },

  getAllKnockoutMatches(params = {}) {
    return API.get('/knockout/', { params });
  },

  getKnockoutMatchById(id) {
    return API.get(`/knockout/${id}`);
  },

  updateKnockoutMatch(id, payload) {
    return API.put(`/knockout/${id}`, payload);
  },

  deleteKnockoutMatch(id) {
    return API.delete(`/knockout/${id}`);
  },

  getKnockoutStats() {
    return API.get('/knockout/stats/');
  },

  getKnockoutByKategori(kategori) {
    return API.get(`/knockout/kategori/${kategori}`);
  },

  getKnockoutByTahap(tahap) {
    return API.get(`/knockout/tahap/${tahap}`);
  },

  getKnockoutStanding(params = {}) {
    return API.get('/knockout/standing', { params });
  }
};    