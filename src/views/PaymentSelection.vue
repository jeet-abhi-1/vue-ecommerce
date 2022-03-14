<template>
  <div class="row justify-center">
    <OrderList :cartItems="cartItems" :totalPrice="totalPrice" />
    <PaymentOption class="col-4" />
  </div>
</template>

<script>
import PaymentOption from "../components/PaymentOption.vue";
import OrderList from "../components/OrderList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    PaymentOption,
    OrderList,
  },
  methods: {
    ...mapActions(["fetchCartItems"]),
  },
  computed: {
    ...mapGetters({
      cartItems: "allItems",
      totalPrice: "priceTotal",
    }),
  },
  created() {
    this.fetchCartItems();
  },
};
</script>

<style lang="scss" scoped>
</style>