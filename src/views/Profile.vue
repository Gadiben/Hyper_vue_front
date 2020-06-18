<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserProfile :id="$route.params.id" />
    <p>{{ count }}</p>
    <button @click="(ev) => incrementCount()">Click to increment</button>
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfile from "@/components/UserProfile.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Profile",
  components: {
    UserProfile,
  },
  computed: {
    ...mapState(["count"]),
  },
  methods: {
    ...mapActions(["incrementCount"]),
  },
  beforeMount() {
    this.incrementCount(2);
  },
};
</script>
Z
