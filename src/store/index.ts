import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./modules/usersModule";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    usersModule,
  },
  state: {
    apiURL: "",
  },
});
