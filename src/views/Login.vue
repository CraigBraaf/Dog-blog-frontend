<template>
<div id="loginpage">
  <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <form @submit.prevent="login" class="col-md-9">
                <div class="AppForm shadow-lg">
                    <div class="row">
                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                            <div class="AppFormLeft">

                                <h1>Login</h1>
                                <div class="form-group position-relative mb-4">
                                    <input type="username" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" v-model="username"
                                        placeholder="Username">
                                        <i class="fa fa-user-o"></i>
                                </div>
                               
                                <div class="form-group position-relative mb-4">
                                    <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" v-model="password"
                                        placeholder="Password">
                                        <i class="fa fa-key"></i>

                                </div>
                                <div class="row  mt-4 mb-4">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                            <label class="form-check-label" for="defaultCheck1">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                </div>

                                <button class="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                                    Login
                                </button>

                                <p class="text-center mt-5">
                                    Don't have an account?
                                    <router-link to="/Register">
                                        Create your account
                                    </router-link>

                                </p>

                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                                <h2 class="position-relative px-4 pb-3 mb-4">PAWS</h2>
                                <p>Find the best informative blogs for your dogs wellbeing!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
        </div>
    </div>

</template>

<script>
export default {
   data() {
     return {
       username: "",
       password: "",
     };
   },
   methods:{
     login() {
         console.log(this.username, this.password)
       fetch("https://d0g-blog.herokuapp.com/users/login", {
    method:"POST",
    body: JSON.stringify ({
     username: this.username,
     password: this.password,
   }),
   headers: {
     "Content-type": "application/json; charset=UTF-8",
   },
       })
       .then((response) => response.json())
       .then((json) => {
           console.log(json)
           if(!json.jwt) return alert("User not registered")
         localStorage.setItem("jwt", json.jwt);
         alert("User logged in");
         this.$router.push({name: "Profile"});
       })
       .catch((err) => {
         alert(err);
       });
     },
   },
};
   
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
*{
    padding: 0;
    margin: 0;
    outline: none;
}
body{
    font-family: 'Roboto', sans-serif !important;
    height:100vh;
    color: #3a3e42 !important;
}
.AppForm .AppFormLeft h1{
    font-size: 35px;
}
.AppForm .AppFormLeft input:focus{
    border-color: #ced4da;
}
.AppForm .AppFormLeft input::placeholder{
   font-size: 15px;
}
.AppForm .AppFormLeft i{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
.AppForm .AppFormLeft a{
    color: #3a3e42 ;
}
.AppForm .AppFormLeft button{
    background: linear-gradient(45deg,#8D334C,#CF6964);
    border-radius: 30px;
}
.AppForm .AppFormLeft p span{
  color: #007bff;
}
.AppForm .AppFormRight{
    background-image: url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg');
    height: 450px;
    background-size: cover;
    background-position: center;
}
.AppForm .AppFormRight:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,#a7a5a5,#d6d6d6);
    opacity: 0.5;
}
.AppForm .AppFormRight h2{
    z-index: 1;
}
.AppForm .AppFormRight h2::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  bottom: 0;
  left:50%;
  transform: translateX(-50%);
}
.AppForm .AppFormRight p{
    z-index: 1;
}

.container {
    margin-top: 40px;
    padding-left: 50px;
}

#loginpage{
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg");
}
</style>