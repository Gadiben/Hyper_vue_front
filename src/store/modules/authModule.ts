import { Module } from "vuex";
import authAPI from "@/api/authentication";

const authModule: Module<any, any> = {
  state: () => ({
    token: null,
  }),
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token;
    },
    DESTROY_TOKEN(state) {
      state.token = null;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      console.log("DIspatching login action");
      authAPI
        .login(username, password)
        .then((response: any) => {
          commit("SAVE_TOKEN", response.token);
        })
        .catch((err: any) => console.log(err));
    },
    logout({ commit }) {
      authAPI
        .logout()
        .then((response: any) => {
          commit("DESTROY_TOKEN");
        })
        .catch((err: any) => console.log(err));
    },
  },
};
export default authModule;
