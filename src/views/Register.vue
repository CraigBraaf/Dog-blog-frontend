<template>

    <div id="card">

    <div id="card-content">

      <div id="card-title">

        <h1 style="font-weight: bold;color:#b18044">SIGN UP</h1>

        <div class="border"></div>

 

      </div>

      <Form @submit="handleRegister" :validation-schema="schema">

        <div v-if="!successful">

        

                <div class="form-group">

                    <label class="form-label" id="nameLabel" for="name"></label>

                    <Field type="text" class="form-control" id="username" name="username" placeholder="Username" tabindex="1"  />

                    <ErrorMessage name="username" class="error-feedback" />

                </div>



                <div class="form-group">

                    <label class="form-label" id="emailLabel" for="email"></label>

                    <Field type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" />

                    <ErrorMessage name="email" class="error-feedback" />

                </div>



            



                <div class="form-group">

                    <label class="form-label" id="subjectLabel" for="sublect"></label>

                    <Field type="text" class="form-control" id="password" name="password" placeholder="Password" tabindex="3"/>

                    <ErrorMessage name="password" class="error-feedback" />

                </div>



                <div class=" b text-center margin-top-25">

                    <button class="btn btn-mod btn-border btn-large">

                       <span class="sign" >SIGN UP</span>

                    

                    </button>

                </div>

                <div class="form-group">

                  <div v-if="message" class="alert alert-danger" role="alert">

                      {{message}}

                  </div>

               </div>

          

        

        </div>

      </Form>

    </div>

  </div>
<div class="logIn">
        <router-link :to="{ name:'Login'}">Login</router-link>
       </div>
</template>



<script>



import { Form, Field, ErrorMessage } from "vee-validate";

import * as yup from "yup";

export default {

  name: "Register",

  components: {

    Form,

    Field,

    ErrorMessage,

   

  },

  data() {

    const schema = yup.object().shape({

      username: yup

        .string()

        .required("Username is required!")

        .min(3, "Must be at least 3 characters!")

        .max(20, "Must be maximum 20 characters!"),

      email: yup

        .string()

        .required("Email is required!")

        .email("Email is invalid!")

        .max(50, "Must be maximum 50 characters!"),

      password: yup

        .string()

        .required("Password is required!")

        .min(6, "Must be at least 6 characters!")

        .max(40, "Must be maximum 40 characters!"),
    });

    return {

      successful: false,

      loading: false,

      schema,

      message: "",

    };

  },

  computed: {

    loggedIn() {

      return this.$store.state.auth.status.loggedIn;

    },

  },

  mounted() {

    if (this.loggedIn) {

      this.$router.push("/Login");

    }

  },

  methods: {

      handleRegister(user) {

      this.message = "";

      this.successful = false;

      this.loading = true;

      this.$store.dispatch("auth/register", user).then(

        (data) => {

          this.message = data.message;

          this.successful = true;

          this.loading = false;

          this.$router.push("/Login");

        },

        (error) => {

          this.message =

            (error.response &&

              error.response.data &&

              error.response.data.message) ||

            error.message ||

            error.toString();

          this.successful = false;

          this.loading = false;

        }

      );

    },

    // handleRegister(user) {

    //   this.errorMessage = "";

    //   this.successful = false;

    //   this.loading = true;

    //   this.$store.dispatch("auth/register", user).then(

    //     (data) => {

    //       this.message = data.message;

    //       this.successful = true;

    //       this.loading = false;

    //        this.$router.push("/");

    //     }

    //   ).catch((error) => {

    //          error = this.errorMessage;

    //   });

    // },

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