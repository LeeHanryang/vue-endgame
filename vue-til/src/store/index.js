import Vue from "vue";
import Vuex from "vuex";
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";

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
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
      deleteCookie("til_auth");
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      commit("setToken", data.token);
      commit("setUsername", data.user.username);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data; // 안넣어도 되지만 필요 데이터 활용 가능하다고 명시적 사용
    },
  },
});
