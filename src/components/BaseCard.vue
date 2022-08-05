<template>
  <div class="card" :style="{ width: cardWidth + '%' }">
    <h2 class="card__title">{{ product.title }}</h2>
    <img class="card__image" :src="product.image" :alt="product.id" />
    <p class="card__price">Цена: {{ product.price }} {{ currency }}</p>

    <div>
      <input type="number" v-model="productAmount" />
      <span>кг</span>
    </div>

    <button @click="addToCart(product)">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "BaseCard",

  data: () => ({
    cardWidth: 0,
    productAmount: "",
  }),

  props: {
    product: {
      type: Object,
      required: true,
    },

    currency: String,
  },

  emit: ["addToCart"],

  methods: {
    addToCart(product) {
      const data = this.createData(product);
      this.$emit("addToCart", data);
      this.$nextTick(() => {
        this.clearField();
      });
    },

    createData(product) {
      let data = {
        amount: this.productAmount,
        price: product.price,
        title: product.title,
      };
      return data;
    },

    clearField() {
      this.productAmount = "";
    },

    updateCardWidth() {
      const count = this.calcWidth();
      this.cardWidth = 100 / count;
    },

    calcWidth() {
      let width = window.innerWidth;
      let count = 3;
      if (width < 840) {
        count = 2;
      }
      if (width < 420) {
        count = 1;
      }
      return count;
    },
  },

  created() {
    this.updateCardWidth();
    window.addEventListener("resize", this.updateCardWidth);
  },

  destroyed() {
    window.removeEventListener("resize", this.updateCardWidth);
  },
};
</script>

<style scoped>
button {
  padding: 5px;
  margin: 5px;
}

.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

.card__image {
  width: 100%;
}
</style>
