<template>
    <q-page-container>
      <q-page class="q-pb-xl">
        <q-card class="auth-tabs">
          <q-tab-panels v-model="tab">
            <q-tab-panel name="Add-Product">
              <AddProduct/>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-page>
    </q-page-container>
</template>     

<script>

import AddProduct from '../../components/AddProduct.vue'

export default {
    data () {
    return {
        tab: 'Add-Product'
    }
  },

    components: {
        AddProduct
    }

}
</script>

<style lang="scss">

.auth-tabs {
    max-width: 500px;
    margin: 0 auto;
}
    
</style>