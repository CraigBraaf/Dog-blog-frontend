<template>
<nav id="navbar1" class="navbar navbar-expand-md navbar-light bg-light fixed-top ">
	<div class="container">
	
    <span class="navbar-brand"><img
        src="https://i.pinimg.com/originals/26/00/e0/2600e0f43d0508a559d51bd312b8f221.png"
        height="50"
        alt=""
        loading="lazy"
      /></span>

    <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text">
    <i class="fa fa-bars fa-1x"></i></span>
    </button>
    
   <div class="collapse navbar-collapse" id="navbarSupportedContent1">
     <ul class="nav navbar-nav ml-auto">
	    <li class="nav-item active">
        <router-link class="nav-link"  router-link to="/">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link"  router-link to="/Blogs">Blogs</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link"   v-if="!currentUser" router-link to="/Login">Login</router-link>
      </li>
      <!-- <li class="nav-item active">
        <router-link class="nav-link"  v-if="currentUser" router-link to="/Register">Register</router-link>
      </li> -->
      <li class="nav-item active">
        <router-link class="nav-link"   v-if="currentUser" router-link to="/Profile">Profile</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link"  router-link to="/Contact">Contact</router-link>
      </li> 
       
        <button class="btn" v-if="currentUser" @click="logOut">LogOut</button>
      
    </ul>
	</div>
	</div>
</nav>

</template>

<script>
export default {
    data(){
        return {
            isActive: false,
             
        };
    },
    methods:{
        toggleNav() {
            this.isActive = !this.isActive;
        },
        logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
    },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
   
  },
 
};
</script>

<style scoped>
.navbar-nav {
  margin-left: auto;
  font-size: 20px;
}

.img {
  margin-left: 50px;
}


</style>
