<template>
   <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <form @submit.prevent="register" class="col-md-9">
                     <div class="AppForm shadow-lg">
                    <div class="row">
                        <div class="col-md-10 d-flex justify-content-center align-items-center">
                            <div class="AppFormLeft">

                                <h1>REGISTER:</h1>
                                <br>
                                <div class="form-group position-relative mb-6">
                                    <input type="text" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" v-model="username"
                                        placeholder="Username">
                                        <i class="fa fa-user-o"></i>
                                </div>
                                <div class="form-group position-relative mb-4">
                                    <input type="email" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" v-model="email"
                                        placeholder="Email">
                                        </div>
                                <div class="form-group position-relative mb-6">
                                    <input type="password" class="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" v-model="password"
                                        placeholder="Password">
                                        <i class="fa fa-key"></i>
                                </div>
                                <div class="row  mt-4 mb-4">
                                    
                                    <div class="col-md-6">
                                    </div>
                                </div>
                               

                            </div>

                        </div>
                    </div>
                </div>
         
               

            </form>
        </div>
    </div>
</template>

<script>
export default {
   data() {
       return {
           username:"",
           email: "",
           password:"",
       };
   },
methods: {
    register() {
        fetch("https://d0g-blog.herokuapp.com/users/register", {
            method: "POST",
            body: JSON.stringify({
                name: this.name,
                email: this.email,
                password: this.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then((response) => response.json())
        .then((json) => {
            this.msg = `${this.name} registered Successfully`;
            alert("redirecting to login...");
            localStorage.setItem("jwt", json.jwt);
            this.$router.push({name: "Login"});
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
    margin-top: 200px;
    padding-right: -50px;
}
</style>