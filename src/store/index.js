import Vue from "vue";
import Vuex from "vuex";
import food from "../../food.json";
// import { ref } from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invetory: food,
    cartStore: [],
  },
  getters: {
    cartStore: (state) => {
      return state.cartStore;
    },
  },
  mutations: {
    addToCart: (state, payload) => {
      let index = -1;
      for (let i = 0; i < state.cartStore.length; i++) {
        if (state.cartStore[i].name === payload.name) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        let cartObj = {
          name: payload.name,
          quntity: payload.quntity,
        };
        state.cartStore.push(cartObj);
      } else {
        state.cartStore[index].quntity += payload.quntity;
      }
    },

    deleteFromCart: (state, payload) => {
      state.cartStore.splice(payload.index, 1);
    },
  },
  actions: {},
  modules: {},
});
