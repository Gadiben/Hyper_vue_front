import { Module } from "vuex";
import userAPI from "@/api/usersEndpoint";

const usersModule: Module<any, any> = {
  state: () => ({
    count: 0,
    user: null,
  }),
  mutations: {
    INCREMENT(state, amount) {
      state.count += amount ? amount : 1;
    },
    SAVE_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    incrementCount({ commit }, amount: number) {
      commit("INCREMENT", amount);
    },
    fetchUser({ commit }, id: number) {
      console.log("DIspatching action");
      userAPI
        .fetchUser(id)
        .then((user: any) => {
          commit("SAVE_USER", user);
        })
        .catch((err: any) => console.log(err));
    },
  },
};
export default usersModule;
