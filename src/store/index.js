import { createStore } from "vuex";
import api from "@/service/api";
// import swi from "@/service/swi";

// Modul untuk 
const stores = {
    namespaced: true, // <--- Tambahkan ini
  state: {
    user: null,
    UserIsLoggedIn: false,
    userRole: null,
    isStoreUpdated: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserIsLoggedIn(state, payload) {
      state.UserIsLoggedIn = payload;
    },
    setUserRole(state, role) {
      state.userRole = role;
    },
    setIsStoreUpdated(state, payload) {
      state.isStoreUpdated = payload;
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const response = await api.login({
          email,
          password,
        });
          console.log(response.data)
        document.cookie = `token=${response.data.token}; path=/; HttpOnly`;
        await context.dispatch("updateStore");
      } catch (err) {
        console.log(err.response.data.error);
        throw new Error(err.response.data.error);
      }
    },
    async updateStore(context) {
      try {
        const res = await api.getUserData();
        const userData = res.data;
        context.commit("setUser", userData);
        context.commit("setUserIsLoggedIn", true);
        context.commit("setUserRole", userData.user.role);
      } catch (e) {
        console.log(e);
        context.commit("setUser", null);
        context.commit("setUserIsLoggedIn", false);
        context.commit("setUserRole", null);
      }
      context.commit("setIsStoreUpdated", true);
    },
    async logout(context) {
      try {
        await api.LogoutPost();
        context.commit("setUser", null);
        context.commit("setUserIsLoggedIn", false);
        context.commit("setUserRole", null);
        document.cookie = "token=; path=/; HttpOnly";
      } catch (error) {
        context.commit("setUser", null);
        context.commit("setUserIsLoggedIn", false);
        context.commit("setUserRole", null);
      }
    },
  },
};

// Membuat store utama dengan kedua modul
const store = createStore({
  modules: {
    stores, // Menambahkan modul 
  },
});

export default store;
