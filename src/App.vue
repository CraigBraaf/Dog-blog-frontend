<template>

<Navbar/>

<router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar,
  }
}

</script>
<style scoped>

#background {
  background-image: url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg");
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
