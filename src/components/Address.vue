<template>
  <div>
    <q-page-container>
      <q-page class="q-pb-xl">
        <q-card class="auth-tabs">
          <q-tab-panels v-model="tab">
            <q-tab-panel name="Shipping Details">
              <form @submit.prevent="submitAddress">
                <div class="row q-mb-sm">
                  <q-banner class="bg-grey-3 col">
                    <template v-slot:avatar>
                      <q-icon name="local_shipping" color="primary" />
                    </template>
                    <span class="text-h6">Shipping Details</span>
                  </q-banner>
                </div>

                <span
                  class="text-red text-caption text-weight-medium"
                  v-if="!$v.address.required && $v.address.$dirty"
                  >Address is required.</span
                >

                <div class="row q-mb-md">
                  <q-input
                    class="col"
                    outlined
                    v-model.trim="address"
                    label="Address"
                    stack-label
                  />
                </div>
                
                
                

                <!-- <div class="row q-mb-sm">
                  <q-input
                    class="col"
                    outlined
                    v-model.trim="landmark"
                    label="Landmark"
                    stack-label
                  />
                </div> -->

                <span
                  class="text-red text-caption text-weight-medium"
                  v-if="!$v.city.required && $v.city.$dirty"
                  >City is required.</span
                >

                <div class="row q-mb-md">
                  <q-input
                    class="col"
                    outlined
                    v-model.trim="city"
                    label="City"
                    stack-label
                  />
                </div>

                <span
                  class="text-red text-caption text-weight-medium"
                  v-if="!$v.pincode.required && $v.pincode.$dirty"
                  >Pincode is required.</span
                >
                <span
                  class="text-red text-caption text-weight-medium"
                  v-if="!$v.pincode.numeric && $v.pincode.$dirty"
                  >Pincode must be a number.</span
                >

                <span
                  class="text-red text-caption text-weight-medium"
                  v-if="!$v.pincode.minLength || !$v.pincode.maxLength"
                  >Pincode must be
                  {{ $v.pincode.$params.minLength.min }} digit</span
                >

                <div class="row q-mb-md">
                  <q-input
                    class="col"
                    outlined
                    v-model.trim="pincode"
                    label="Pincode"
                    stack-label
                  />
                </div>

                <div class="row">
                  <q-space />
                  <q-btn
                    class="q-mr-md"
                    to="/cart"
                    type="submit"
                    color="dark"
                    label="Back to cart"
                  />
                  <q-btn type="submit" color="primary" label="Place Order" />
                </div>
              </form>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  required,
  alpha,
  numeric,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  props: ["cartItems", "totalPrice"],
  data() {
    return {
      tab: "Shipping Details",
      address: "",
      // landmark: "",
      city: "",
      pincode: "",
    };
  },
  validations: {
    address: {
      required,
    },
    city: {
      required,
      alpha,
    },
    pincode: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(12),
    },
  },
  methods: {
    ...mapActions(["placeOrder"]),

    submitAddress() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let address = {
          address: this.address,
          city: this.city,
        };

        this.placeOrder(address);
      } else {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>