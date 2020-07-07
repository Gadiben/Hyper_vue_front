<template>
  <div class="carousel">
    <v-carousel show-arrows-on-hover height="50vh">
      <v-carousel-item ripple="false" v-for="link in medias" :key="link.id"
        ><img alt="Media Image" :src="link.src" class="carrousel-image"
      /></v-carousel-item>
      <v-carousel-item><img alt="Media Image"/></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VCarousel, VCarouselItem } from "vuetify/lib";

export default Vue.extend({
  name: "Carousel",
  props: {
    medias: Array,
  },
  components: { VCarousel, VCarouselItem },
});
</script>
<style lang="scss">
.carousel {
  max-width: 50vh;
  width: 100%;
  overflow: hidden;
  height: 50vh;
}
.v-responsive__content {
  width: 100%;
}
.v-ripple__container {
  display: none;
}
.carrousel-image {
  height: 100%;
}
.v-window__next {
  right: 0;
}
</style>
