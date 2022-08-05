export default {
  state: {
    cart: [],
  },

  mutations: {
    addToCart(state, product) {
      const isProductInCart = state.cart.find(
        (item) => item.title === product.title
      );

      if (isProductInCart) {
        isProductInCart.amount = +isProductInCart.amount + +product.amount;
        state.cart = state.cart.filter((item) => item.title != product.title);

        if (+isProductInCart.amount <= 0) {
          return;
        }

        state.cart.unshift(isProductInCart);
        return;
      }

      if (+product.amount > 0) {
        state.cart.unshift(product);
      }
    },
  },

  getters: {
    allCart: (state) => {
      return state.cart;
    },

    cartAmount: (state) => {
      const val = state.cart.reduce((result, item) => {
        return result + item.price * item.amount;
      }, 0);
      return val;
    },
  },

  actions: {
    addProduct(ctx, product) {
      ctx.commit("addToCart", product);
    },
  },
};
