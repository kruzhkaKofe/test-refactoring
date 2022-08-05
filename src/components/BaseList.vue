<template>
  <div class="product__list">
    <base-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      :currency="currency"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import BaseCard from "./BaseCard";

export default {
  components: {
    BaseCard,
  },

  props: {
    products: {
      type: Array,
      required: true,
    },

    currency: String,
  },

  methods: {
    addToCart(product) {
      this.$emit("addToCart", product);
    },
  },
};
</script>

<style scoped>
.product__list {
  padding: 10px;
}
</style>
