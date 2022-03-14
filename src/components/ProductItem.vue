<template>
  <div class="product-items">
    <router-link class="routerLink" :to="'/cart/' + product._id" exact>
      <q-card
        class="
          my-card
          flex-center
          rounded-borders
          q-px-md q-mx-sm
          no-pointer-events
        "
      >
        <div class="justify-center q-gutter-md row items-start">
          <q-img
            :src="product.image"
            style="max-width: 200px; height: 337px"
            class="product-image"
            :ratio="4 / 3"
          />
        </div>
        <div class="justify-between product-content text-primary">
          <q-item-section class="cursor-pointer">
            <q-item-label class="text-subtitle2">{{
              product.title
            }}</q-item-label>
            <br />
            <q-item-label class="text-grey"
              ><q-icon name="currency_rupee" />{{ product.price }}</q-item-label
            >
          </q-item-section>
        </div>
      </q-card>
      <div>
        <q-btn
          @click.prevent="addProductToCart(product._id)"
          flat
          round
          class="btn-cart"
          color="blue-grey-9"
          icon="add_shopping_cart"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addToCart"]),

    addProductToCart(id) {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged In.");
        return;
      }

      try {
         this.addToCart(id);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>
    

<style lang="scss">
.btn-cart {
  position: relative;
  left: 10rem;
  bottom: 3rem;
}

.product-image {
  max-width: 250px;
  max-height: 125px;
}

.product-content {
  width: 11rem !important;
  line-height: 6px;
  padding: 0.4rem 0;
}

.product-items {
  display: flex;
  flex-wrap: wrap;
}
</style>