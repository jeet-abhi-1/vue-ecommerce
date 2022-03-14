<template>
  <div>
    <div v-if="products.length < 1" class="q-my-xl row justify-center">
      <p class="text-h5">Please wait</p>
      <q-spinner-dots
        width="100vw"
        class="justify-center q-my-auto"
        color="primary"
        size="1rem"
      />
    </div>
    <div
      v-else
      class="overflow-auto hide-scrollbar q-mx-xl rounded-border"
      style="height: 70vh; border-radius: 16px"
    >
      <div class="options q-pr-lg q-pt-sm bg-red-11">
        <q-btn flat color="primary" label="Filter" class="q-mr-md sticky-btn">
          <q-menu :offset="[0, 20]">
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>Filter By</q-item-section>
              </q-item>
              <q-separator color="text-black" />
              <q-item clickable v-close-popup>
                <q-item-section>Category</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Size</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Type</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn flat color="primary" label="Sort By">
          <q-menu :offset="[0, 20]">
            <q-list style="min-width: 100px">
              <q-item>
                <q-item-section>Sort By</q-item-section>
              </q-item>
              <q-separator color="text-black" />
              <q-item clickable v-close-popup>
                <q-item-section>Time</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section @click="sortByPrice"> Price </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Discount</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
      <div
        class="
          justify-center
          q-px-auto q-py-lg
          bg-red-11
          row
          items-start
          q-col-gutter-sm
        "
      >
        <ProductItem
          class=""
          v-for="(data, index) in products"
          :key="index"
          :product="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(["fetchProducts"]),

    sortByPrice() {
      this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
    }),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" scoped>
.routerLink {
  text-decoration: none;
}

.wrap-class {
  word-wrap: break-word;
  max-width: 200px;
  max-height: 273px;
}

.wrap-class img {
  width: 200px;
  height: 200px;
}

.text-h6 {
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: 0.0125em;
}

.product-content {
  border: 2px solid black;
}

.options {
  text-align: end;
}
</style>