<template>
  <div class="home" v-if="media">
    <img alt="Media Image" :src="media.image" />
    <h2>{{ media.title }}</h2>
    <p>{{ media.description }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Media",
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
