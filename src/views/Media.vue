<template>
  <div class="media-page" v-if="media">
    <div class="widget">
      <div class="media-image-container">
        <img alt="Media Image" :src="media.image" />
      </div>
    </div>
    <div class="center-row">
      <h2>{{ media.title }}</h2>
      <div class="widget">
        <p>{{ media.description }}</p>
      </div>
      <div class="media-page-body">
        <Carrousel
          :medias="[
            {
              id: 0,
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg',
            },
            {
              id: 1,
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg',
            },
          ]"
        />
        <Carrousel
          :medias="[
            {
              id: 0,
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg',
            },
            {
              id: 1,
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg',
            },
          ]"
        />
        <Carrousel
          :medias="[
            {
              id: 0,
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg',
            },
            {
              id: 1,
              src:
                'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._AC_SL1200_.jpg',
            },
          ]"
        />
      </div>
    </div>
    <div class="right-page">
      <div class="widget">
        <button>Go to fan base page</button>
        <p>Fan base page</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Carrousel from "@/components/Carousel.vue";

export default {
  name: "Media",
  components: {
    Carrousel,
  },
  computed: {
    ...mapState({
      media: (state) => state.mediasModule.media,
    }),
  },
  methods: {
    ...mapActions(["mediasModule", "fetchMedia"]),
  },
  mounted() {
    this.$store.dispatch("fetchMedia", this.$route.params.id);
  },
};
</script>
<style scoped lang="scss">
.media-page {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 5px;
}
.media-image-container img {
  width: 80%;
}
.widget {
  margin: 30px auto;
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: lightgrey 0 0 15px 0;
  border-radius: 10px;
  overflow: hidden;
}
.media-page-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  height: 100%;
}
</style>
