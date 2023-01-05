import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
} from "@/utils/cookies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || "",
    token: getAuthFromCookie() || "",
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
      deleteCookie("til_user");
      deleteCookie("til_auth");
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});
