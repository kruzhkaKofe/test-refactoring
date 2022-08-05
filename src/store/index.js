import Vue from "vue";
import Vuex from "vuex";
import cartModule from "./modules/cartModule";
import productsModule from "./modules/productsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cartModule,
    productsModule,
  },
});
