<template>
  <div class="">
    <div class="q-pr-md" style="max-width: 350px">
      <q-item class="bg-grey-3 q-mb-sm">
        <q-item-section class="q-pr-xl text-h6">
          <q-icon name="local_mall" color="primary" />

          <q-item-label>Orders : </q-item-label>
        </q-item-section>
      </q-item>
      <q-list bordered separator>
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
        </q-item>
        <q-item>
          <q-item-section class="q-pr-xl">
            <q-item-label class="tp">Total Price : {{ totalPrice }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  props: ["cartItems", "totalPrice"],
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.q-item {
  padding-right: 8rem;
}
</style>