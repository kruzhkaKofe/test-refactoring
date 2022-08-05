<template>
  <div id="app">
    <base-header :cartPrice="cartPriceToFixed" :currency="currency" />
    <base-list
      :currency="currency"
      :products="products"
      @addToCart="addToCart"
    />
    <base-cart :cart="cart" />
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import BaseList from "./components/BaseList.vue";
import BaseCart from "./components/BaseCart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  data: () => ({
    currency: "VGTB",
  }),

  components: {
    BaseHeader,
    BaseList,
    BaseCart,
  },

  computed: {
    ...mapGetters(["allCart", "cartAmount", "allProducts"]),

    cart() {
      return this.allCart;
    },

    cartPriceToFixed() {
      return this.cartAmount.toFixed(2);
    },

    products() {
      return this.allProducts;
    },
  },

  methods: {
    ...mapActions(["addProduct", "getProductsList", "findProduct"]),

    startPricesMonitoring() {
      setInterval(this.getProductsList, 2000);
    },

    addToCart(product) {
      this.addProduct(product);
    },
  },

  mounted() {
    this.getProductsList();
    this.startPricesMonitoring();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
