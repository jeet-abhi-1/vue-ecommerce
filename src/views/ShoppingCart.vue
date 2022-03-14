<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-sm flex-center">
      <div class="cart-image" style="width: 300px; height: 345px">
        <div class="wrap-class">
          <img :src="product.image" />
        </div>
      </div>

      <q-card class="col-xs-5">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">{{ product.title }}</div>
          <div class="text-subtitle1">$ {{ product.price }}</div>
        </q-card-section>

        <div class="q-pa-md">
          <div class="text-md">Choose size</div>
          <div class="q-gutter-sm">
            <q-radio v-model="size" val="7" label="7" />
            <q-radio v-model="size" val="8" label="8" />
            <q-radio v-model="size" val="9" label="9" />
            <q-radio v-model="size" val="10" label="10" />
          </div>
        </div>
        <div class="q-pa-md">
          <div class="text-lg">Description :</div>
          <p>{{ product.description }}</p>
        </div>

        <q-separator color="primary" />

        <q-card-actions align="right">
          <q-btn
            to="/products"
            color="white"
            text-color="primary"
            label="Back"
          />
          <q-btn @click="proceedPayment" color="primary" label="Add to Cart" />
        </q-card-actions>
      </q-card>

      <q-dialog v-model="alert">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Size</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Please select size to proceed.
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      alert: false,
      size: "",
      shape: "",
    };
  },

  methods: {
    ...mapActions(["getSingleProduct"]),

    proceedPayment() {
      if (this.size.length === 0) {
        this.alert = true;
        return (this.addToCart = false);
      }
      return (this.addToCart = true);
    },
  },

  computed: {
    ...mapGetters({
      product: "singleProduct",
    }),
  },
  created() {
    this.getSingleProduct(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.cart-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e3e3e3;
}

.wrap-class-cart {
  text-align: center;
}
.wrap-class-cart img {
  max-width: 180px;
  max-height: 180px;
  text-align: center;
}

.wrap-class img {
  width: 200px;
  height: 200px;
}

.info-box {
  margin-left: 20rem;
}
</style>