import Vue from "vue";
import Vuex from "vuex";
import food from "../../food.json";
// import { ref } from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invetory: food,
    cartStore: {},
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
