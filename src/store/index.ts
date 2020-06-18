import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "./mutation-types";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    [INCREMENT](state, amount) {
      state.count += amount ? amount : 1;
    },
  },
  actions: {
    incrementCount(context, amount) {
      context.commit("INCREMENT", amount);
    },
  },
  modules: {},
});
