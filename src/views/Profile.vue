<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserProfile :id="$route.params.id" />
    <p>{{ count }}</p>
    <button @click="(ev) => incrementCount()">Click to increment</button>
    <button @click="test('test')">Test</button>
    <p>USER {{ user }}</p>
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
    ...mapState({
      count: (state) => state.usersModule.count,
      user: (state) => state.usersModule.user,
    }),
  },
  methods: {
    ...mapActions(["usersModule", "incrementCount"]),
    ...mapActions(["usersModule", "fetchUser"]),
    test(str) {
      console.log(str);
    },
  },
  mounted() {
    console.log("Je vais bientôt être monté sur le DOM!");
    this.$store.dispatch("fetchUser", this.$route.params.id);
  },
};
</script>
