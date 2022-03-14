<template>
  <div>
    <Cart :cartItems="cartItems" :totalPrice="totalPrice" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Cart from "../components/Cart.vue";

export default {
  components: {
    Cart,
  },
  created() {
    this.fetchCartItems();
  },

  methods: {
    ...mapActions(["fetchCartItems", "removeFromCart"]),

    async removeProduct(id) {
      this.removeFromCart(id);
    },
  },
  computed: {
    ...mapGetters({
      cartItems: "allItems",
      totalPrice: "priceTotal",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>