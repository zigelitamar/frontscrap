import Vue from "vue";
import Vuex from "vuex";
import {
  getArticles,
  authenticate,
  addTeam,
  remTeam,
  getTeams,
  signup,
  logOut,
} from "@/api";
import { isValidJwt } from "@/utils";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    teams: [],
    user: {},
    jwt: "",
  },
  mutations: {
    deleteData(state) {
      console.log(state.userData);
      console.log(state.jwt);
      console.log(localStorage.token);
      state.userData = {};
      state.jwt = {};
      localStorage.token = "";
    },
    setUserData(state, payload) {
      console.log("setUserData payload = ", payload);
      state.userData = payload.userData;
    },
    setJwtToken(state, payload) {
      console.log("setJwtToken payload = ", payload);
      localStorage.token = payload.jwt.token;
      localStorage.user = true;
      state.jwt = payload.jwt;
    },
  },
  actions: {
    login(context, userData) {
      context.commit("setUserData", { userData });
      return authenticate(userData).then((response) =>
        context.commit("setJwtToken", { jwt: response.data })
      );
    },
    async logout(context) {
      await logOut(context.state.jwt.token).then((res) => console.log(res));
      context.commit("deleteData");
    },
    register(context, userData) {
      context.commit("setUserData", { userData });
      let answer = signup(userData);
      console.log(answer);
      return answer;
    },
    getMyArticles(context) {
      console.log(context.state.jwt.token);
      return getArticles(context.state.jwt.token);
    },
    getMyTeams(context) {
      console.log(context.state.jwt.token);
      return getTeams(context.state.jwt.token);
    },
    addteam(context, teams) {
      console.log(teams["team"]);
      console.log(context.state.jwt.token);
      return addTeam(teams["team"], context.state.jwt.token);
    },
    removeTeam(context, teams) {
      console.log(teams["ret"]);
      console.log(context.state.jwt.token);
      return remTeam(teams["ret"], context.state.jwt.token);
    },
  },
  modules: {},
  getters: {
    isAuthenticated(state) {
      return isValidJwt(state.jwt.token);
    },
  },
});
