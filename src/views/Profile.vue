<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserProfile :id="$route.params.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfile from "@/components/UserProfile.vue";

export default {
  name: "Profile",
  components: {
    UserProfile
  }
};
</script>
Z
