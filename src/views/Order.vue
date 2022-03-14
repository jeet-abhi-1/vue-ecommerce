<template>
  <div>
    <div class="row justify-center">
      <OrderList :cartItems="cartItems" :totalPrice="totalPrice" />
      <Address class="col-4" :cartItems="cartItems" :totalPrice="totalPrice" />
    </div>
    <div></div>
  </div>
</template>

<script>
import Address from "../components/Address.vue";
import OrderList from "../components/OrderList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Address,
    OrderList,
  },
  data() {
    return {};
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