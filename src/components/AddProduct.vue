<template>
  <div>
    <form @submit.prevent="addProduct">
      <div>
        <p v-if="error" class="text-red">
          Process Failed : {{ error.message }}
        </p>
      </div>
      <div class="row q-mb-md">
        <q-banner class="bg-grey-3 col">
          <template v-slot:avatar>
            <q-icon name="account_circle" color="primary" />
          </template>
          Add Product..!
        </q-banner>
      </div>
      <div class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="product.title"
          :rules="[(val) => !!val || 'Field is required']"
          lazy-rules
          label="Title"
          ref="title"
          stack-label
        />
      </div>
      <div class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="product.description"
          :rules="[(val) => !!val || 'Field is required']"
          lazy-rules
          label="Description"
          ref="description"
          stack-label
        />
      </div>
      <div class="row q-mb-md">
        <q-input
          class="col"
          type="text"
          outlined
          v-model="product.category"
          :rules="[(val) => !!val || 'Field is required']"
          label="Category"
          ref="category"
          stack-label
        />
      </div>
      <div class="row q-mb-md">
        <q-file
          class="col"
          label="Image"
          outlined
          v-model="product.image"
          ref="image"
          :rules="[(val) => !!val || 'Field is required']"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </div>
      <div class="row q-mb-md">
        <q-input
          class="col"
          type="Number"
          outlined
          v-model="product.price"
          :rules="[(val) => !!val || 'Field is required']"
          label="Price"
          ref="price"
          stack-label
        />
      </div>
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" label="Add Product" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        title: "",
        description: "",
        category: "",
        image: "https://picsum.photos/200",
        price: "",
      },
      error: "",
    };
  },

  methods: {
    async addProduct() {
      if (
        !this.$refs.title.hasError &&
        !this.$refs.description.hasError &&
        !this.$refs.category.hasError &&
        !this.$refs.price.hasError
      ) {
        try {
          const response = await axios.post(
            "http://localhost:3000/product/add-product",
            this.product
          );
          console.log(response);
          this.$router.push("/products");
        } catch (error) {
          this.error = error;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>