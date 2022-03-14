<template>
  <div>
    <MyOrders :myOrders="myOrders"/>
  </div>
</template>

<script>
import MyOrders from "../components/MyOrders.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MyOrders,
  },
  computed: {
    ...mapGetters({
      myOrders: "orders",
    }),
  },
  methods: {
    ...mapActions(["fetchOrders"]),
  },
  created() {
    this.fetchOrders();
  },
};
</script>

<style lang="scss" scoped>
</style>