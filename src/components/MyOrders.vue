<template>
  <div class="column items-center">
    <div>
      <div class="q-mb-xl" v-for="order in myOrders.slice().reverse()" :key="order._id">
        <div class="" style="max-width: 350px">
          <q-item class="bg-grey-3 q-mb-sm">
            <q-item-section class="q-pr-xl text-lg text-bold">
              <q-item-label>Order ID : {{ order._id }} </q-item-label>
            </q-item-section>
          </q-item>
          <q-list bordered separator>
            <q-item
              v-for="(item, index) in order.items"
              :key="index"
              clickable
              v-ripple
            >
              <q-item-section class="q-pr-xl">
                <router-link class="routerLink" :to="'/cart/' + item._id" exact>
                  <q-item-label>{{ item.title }}</q-item-label>
                </router-link>
                <q-item-label caption><q-icon name="currency_rupee"/> {{ item.price }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="q-pr-xl">
                <q-item-label
                  >Total Price : <q-icon name="currency_rupee"/>{{ order.totalPrice }}</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    
    <div class="q-mb-xl">
      <div>
        <q-btn to="/products" label="Shop for MORE..!" color="primary" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['myOrders']
};
</script>

<style lang="scss" scoped>
</style>