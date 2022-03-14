<template>
  <q-layout view="hHh Lpr fFf">
    
    <HeaderPage :drawerLeft="drawerLeft"/>
    <router-view/>
    <FooterPage/>

     <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <div class="fit q-mt-xl">
         

            hello

        </div>
      </q-drawer>
  </q-layout>
</template>

<script>

import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HeaderPage: Header,
    FooterPage: Footer
  },

  data () {
    return {
        drawerLeft: false
    }
  }
}
</script>

<style>

.routerLink {
  text-decoration: none;
}


</style>
