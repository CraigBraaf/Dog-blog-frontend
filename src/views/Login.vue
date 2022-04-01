<template>
<div id="loginpage">
<div class="formq">
  <h1>LOGIN:</h1>
    <Form @submit="handleLogin" :validation-schema="schema">
            <div class="form-group">
                    <label class="form-label" id="nameLabel" for="name"></label>
                    <Field name="username" type="text" class="form-control" placeholder="username" />
                    <ErrorMessage name="username" class="error-feedback" />
                    
                </div>
        <div class="form-group">
                    <label class="form-label" id="nameLabel" for="name"></label>
                    <Field name="email" type="text" class="form-control" placeholder="email" />
                    <ErrorMessage name="email" class="error-feedback" />
                    
                </div>
                <div class="form-group">
                    <label class="form-label" id="subjectLabel" for="sublect"></label>
                    <Field name="password" type="password" class="form-control" placeholder="Password" />
                    <ErrorMessage name="password" class="error-feedback"/>
                </div>
                <div class="form-group">
                <div class="b text-center margin-top-25">
                    <button class="btn btn-mod btn-border btn-large">
                      <span class="log">LOGIN</span>
                     

                    </button>
                </div>
                </div>
                <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
                {{message}}
            </div>
            
        </div>
       <div class="signUp">
        <router-link :to="{ name:'Register'}">Register</router-link>
       </div>
      </Form>
 
 
</div>
           
</div>
    

</template>


<script>

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
    
  },
  data() {
    const schema = yup.object().shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("Password is required"),
      username: yup.string().required("Username is required")
    });
    return {
      loading: false,
      message: "",
      schema,
    
     
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
   created() {
    if (this.loggedIn) {
      this.$router.push("/Profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        (data) => {
          if(data.role === 'admin'){
              this.loading = false;
              this.$router.push("/AdminDashBoard");
          }
          else{
            this.loading = false;
            this.$router.push("/Profile");
          }
          
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
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

.formq{
    padding-top: 200px;
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