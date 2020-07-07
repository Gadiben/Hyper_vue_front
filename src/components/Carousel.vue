<template>
  <div>
    <p>Carousel</p>
    <v-app>
      <v-carousel show-arrows-on-hover>
        <v-carousel-item v-for="link in medias" :key="link.id"
          ><img alt="Media Image" :src="link.src" class="carrousel-image"
        /></v-carousel-item>
        <v-carousel-item><img alt="Media Image"/></v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VApp, VCarousel, VCarouselItem } from "vuetify/lib";

export default Vue.extend({
  name: "Carousel",
  props: {
    medias: Array,
  },
  components: { VApp, VCarousel, VCarouselItem },
});
</script>
<style scoped lang="scss">
.media-page {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 5px;
}
.carrousel-image {
  max-height: 100%;
}
.media-image-container img {
  width: 100%;
}
.widget {
  margin: 30px auto;
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: lightgrey 0 0 15px 0;
  border-radius: 10px;
  overflow: hidden;
}
</style>
