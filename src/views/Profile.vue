<template>
  <div class="container">
      <h3>
        <strong>{{ currentUser.username }}</strong> Profile
      </h3>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
  </div>
</template>


<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>



<style>

</style>