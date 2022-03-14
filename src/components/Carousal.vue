<template>
    <div class="q-px-lg rounded" >
       <q-carousel 
            class="rounded-borders text-black-5"
            animated
            height="30vh"
            v-model="corousal"
            infinite
            navigation
            autoplay
            padding
            control-color="dark"
            >
                <q-carousel-slide name="nike" class="column no-wrap flex-center" img-src="img/background.jpg">
                    <div class="text-h2">
                        Nike
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="adidas" class="column no-wrap flex-center" img-src="img/background.jpg">
                    <div class="text-h2">
                        Adidas
                    </div>
                </q-carousel-slide>
                <q-carousel-slide name="puma" class="column no-wrap flex-center" img-src="img/background.jpg">
                    <div class="text-h2">
                        Puma
                    </div>
                </q-carousel-slide>
       </q-carousel>
    </div>
</template>

<script>

export default {
  data() {
      return {
          corousal: 'nike'
      }
  }
}
</script>

<style lang="scss" scoped>

.rounded-borders {
    border-radius: 2rem;
}

</style>