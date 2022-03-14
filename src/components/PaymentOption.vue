<template>
  <div>
    <q-page-container>
      <q-page class="q-pb-xl">
        <q-card class="auth-tabs">
          <q-tab-panels v-model="tab">
            <q-tab-panel name="Pyament Options">
              <div class="row q-mb-sm">
                <q-banner class="bg-grey-3 col">
                  <template v-slot:avatar>
                    <q-icon name="payments" color="primary" />
                  </template>
                  <span class="text-h6">Select Payment Mode</span>
                </q-banner>
              </div>

              <div class="column">
                <q-radio
                  v-model="mode"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="cod"
                  label="Cash On Delivery"
                />

                <q-radio
                  v-model="mode"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="netbanking"
                  label="Net Banking"
                />

                <q-radio
                  v-model="mode"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="upi"
                  label="Upi"
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

                <q-btn
                  @click="checkout"
                  v-if="mode"
                  type="submit"
                  color="primary"
                  label="Continue"
                />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "Pyament Options",
      mode: "",
    };
  },
  methods: {
    checkout() {
      console.log(this.mode);
      if (this.mode == "cod") {
        this.$router.push("/place-order");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>