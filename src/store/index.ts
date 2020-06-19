import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./modules/usersModule";
import authModule from "./modules/authModule";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    usersModule,
    authModule,
  },
});
