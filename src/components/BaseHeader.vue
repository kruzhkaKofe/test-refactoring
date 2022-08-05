<template>
  <header class="header">
    <h1>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h1>
  </header>
</template>

<script>
export default {
  name: "BaseHeader",

  props: {
    cartPrice: {
      type: String,
      required: true,
    },

    currency: String,
  },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>
