<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserProfile :id="$route.params.id" />
    <p>{{ count }}</p>
    <button @click="(ev) => incrementCount()">Click to increment</button>
    <button @click="act('login')">Login</button>
    <button @click="act('logout')">Logout</button>
    <p>USER {{ user }}</p>
    <p>Token {{ token }}</p>
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
      token: (state) => state.authModule.token,
    }),
  },
  methods: {
    ...mapActions(["usersModule", "incrementCount"]),
    ...mapActions(["usersModule", "fetchUser"]),
    ...mapActions(["authModule", "login"]),
    ...mapActions(["authModule", "logout"]),
    act(str) {
      console.log(str);
      if (str === "login") {
        this.$store.dispatch("login", { username: "goek", password: "123456" });
      } else if (str == "logout") {
        this.$store.dispatch("logout");
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchUser", this.$route.params.id);
  },
};
</script>
