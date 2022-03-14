<template>
    <q-page-container>
      <q-page class="q-pb-xl">
          <q-card class="auth-tabs">
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login"> 
                <LoginUser />
                </q-tab-panel>  
            </q-tab-panels>
        </q-card>
      </q-page>
    </q-page-container>
</template>     

<script>

import LoginUser from '../../components/Auth/LoginUser.vue'

export default {
    data () {
    return {
      tab: 'login'
    }
  },

    components: {
        LoginUser,
    }

}
</script>

<style lang="scss">

.auth-tabs {
    max-width: 500px;
    margin: 0 auto;
}
    
</style>