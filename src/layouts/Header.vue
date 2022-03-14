<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-bar>
        <q-icon class="cursor-pointer" name="menu" @click="drawer = !drawer" />
        <router-link class="routerLink text-white q-ml-md" to="/">
          <div>The Ninja Market</div>
        </router-link>
        <q-space />

        <q-btn
          v-show="isLoggedIn"
          to="/cart"
          size="md"
          flat
          icon="shopping_cart"
        />

        <q-btn
          v-if="!isLoggedIn"
          to="/login"
          size="md"
          flat
          icon="account_circle"
          label="Login"
        />
        <q-btn
          v-else
          @click.prevent="logOut"
          size="md"
          flat
          icon="logout"
          :label="username"
        />
      </q-bar>
    </q-header>
    <q-page-container>
      <q-tabs
        switch-indicator
        class="product-bar bg-indigo-1 text-black-5 shadow-2 q-py-md q-mb-lg"
      >
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :name="nav.name"
          :label="nav.label"
        />
      </q-tabs>
    </q-page-container>

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      overlay
      bordered
      content-class="bg-light-blue-9 text-white"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template>
            <q-item to="/orders" style="color: #fff" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="local_mall" />
              </q-item-section>
              <q-item-section class="text-subtitle1">
                Your Orders
              </q-item-section>
            </q-item>
            <q-separator />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      navs: [
        {
          to: "/",
          name: "nike",
          label: "Nike",
        },
        {
          to: "/adidas",
          name: "adidas",
          label: "Adidas",
        },
        {
          to: "/puma",
          name: "puma",
          label: "Puma",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["logOutUser"]),

    logOut() {
      this.logOutUser();
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters({
      username: "username",
      isLoggedIn: "isLoggedIn",
    }),
  },
};
</script>

<style lang="scss">
.q-layout {
  min-height: fit-content !important;
}
</style>