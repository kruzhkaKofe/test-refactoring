import api from "../../api/products.js";

export default {
  state: {
    products: [],
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },

  getters: {
    allProducts: (state) => {
      return state.products;
    },
  },

  actions: {
    async getProductsList(ctx) {
      const arrayOfProducts = await api.getProductsList();
      ctx.commit("setProducts", arrayOfProducts);
    },
  },
};
