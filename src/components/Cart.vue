<template>
  <div>
    <div v-if="cartItems.length < 1" class="text-h6 text-center q-mt-xl">
      <div>Cart is Empty..!</div>
      <div>
        <q-btn size="lg" to="/products" label="Go Shopping" color="primary" />
      </div>
    </div>

    <div v-else class="flex column items-center" style="width: 100%">
      <q-item class="q-mb-sm">
        <q-item-section class="items-start text-h5">
          <q-item-label class="row items-center">
            <q-icon size="md" name="shopping_cart" color="primary" />Cart Items
            :
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-list style="width: 350px" bordered separator>
        <q-item
          v-for="(item, index) in cartItems"
          :key="index"
          clickable
          v-ripple
        >
          <q-item-section class="q-pr-xl">
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.price }}</q-item-label>
          </q-item-section>
          <q-btn
            @click="removeProduct(item._id)"
            flat
            text-color="red"
            icon="delete_forever"
          />
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label class="text-right text-subtitle2 q-mb-md">
              Total Price : <q-icon name="currency_rupee" />
              {{ totalPrice }}</q-item-label
            >
            <q-btn to="/select-payment" color="primary" label="Continue" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Cart",
  props: ["cartItems", "totalPrice"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["removeFromCart"]),

    removeProduct(id) {
      this.removeFromCart(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.q-pa-xl {
  padding: 2rem 20rem;
}
</style>