<template>
  <div>
    <div class="q-pa-md items-center">
      <q-card class="my-card bg-secondary text-center text-black">
        <q-card-section>
          <div class="text-primary text-subtitle2 q-mb-xl">
            Order ID : #{{ lastOrder }}
          </div>
          <div>
            <q-icon name="redeem" color="primary" size="55px" />
          </div>
          <div class="text-primary text-h4">Thanks for shopping with us.</div>
          <div class="text-primary text-h4">
            You will be intimated soon on your order status.
          </div>
        </q-card-section>

        <q-card-actions class="justify-center">
          <q-btn
            to="/"
            class="q-my-xl"
            unelevated
            color="primary"
            label="Explore more products"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      lastOrder: "lastOrder",
    }),
  },
  methods: {
    ...mapActions(["fetchLastOrders"]),
  },
  created() {
    this.fetchLastOrders();
  },
};
</script>

<style lang="scss" scoped>
</style>