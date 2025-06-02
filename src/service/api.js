import axios from "axios";

const baseURL = "http://192.168.1.50:3000";

const API = axios.create({
  baseURL: baseURL,
});

export default {
  registerPeserta(formData) {
    // formData harus berupa FormData object, karena ada file upload
    return API.post('/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};
