<template>
  <div class="cart">
    <div class="cart__list" v-for="item in cart" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
};
</script>
