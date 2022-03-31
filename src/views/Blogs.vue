<template><br><br><br><br>
  <h2>Give us a bark if you have anything to add:</h2>
<!-- Button trigger moda-->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  CREATE BLOG
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create Blog</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<div class="contaiiner">
  <div class="row">
    <div class="col-md-12">
      <form method="post" role="form">
        <div class="form-group">
          <label> Title: </label>
          <input type="text" v-model="newPost.title" class="form-control" name="title" placeholder="Title"/>
        </div>
        <div class="form-group">
          <label> Image: </label>
<div class="form-group">
          <input type="url" v-model="newPost.photo" class="form-control" name="title" placeholder="URL"/>
        </div>
        </div>
        <div class="form-group">
          <label> Description: </label>
<div class="form-group">
          <input type="text"  v-model="newPost.desc" size="50" class="form-control" name="title" placeholder="Description"/>
        </div>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" @click.prevent="createPost" class="btn btn-secondary" data-bs-dismiss="modal">WOOF!</button>
      </div>
    </div>
  </div>
</div>

<!--  -->
<div class="container">
  <div class="" v-for="post in posts" :key="post.id">
    <div v-if="post">
<div class="card">
  <div class="card-header">
    <img :src="post.photo">
  </div>
  <div class="card-content">
    <span>PAWS</span>
    <h3>{{ post.title }}</h3>
    <p>{{post.description}}</p>
  </div>
  <div class="card-footer">
    <div class="author">
      <p>{{post.username}}</p>
      <div class="edit">
      <button> Delete </button>
      <button> Edit </button>
      </div>
      <small>2h ago</small>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>


</template>

<script>
export default {
   data(){
      return {
       posts: [],
       newPost: {
         title: "",
         desc: "",
         photo: "",
       },
       url: "https://dog-apii.herokuapp.com/posts"
      };
},
mounted() {
    fetch (this.url)
    .then((res) => res.json())
    .then((data) => (this.posts = data))
    .catch((err) => console.log(err.message));
  },
  methods: {
    async createPost(){
      try {
        fetch(this.url, {
          method: "POST",
          body: JSON.stringify({
            title: this.newPost.title,
            description: this.newPost.desc,
            photo: this.newPost.photo
          }),
          // headers:{
          //   "Content-Type": "application/json",
          //   Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`
          // }
        }).then((response) => response.json()).then(() => alert("You have created a new post!"))
        
      } catch (error) {
        console.error(error)
      }
    }
  }
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");

* {     
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: "Open Sans", sans-serif;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 360px;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
}

.card-header {
  width: 100%;
}

.card-header img {
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.card-content {
  padding: 1rem;
}

.card-content span {
  background-color: #51adc4;
  color: #fff;
  font-weight: 300;
  font-size: 10px;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  text-transform: uppercase;
}

.card-content h3 {
  margin: 1rem 0 0.5rem 0;
}

.card-content p {
  font-size: 14px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.card-footer img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}

.card-footer .author {
  flex: 1;
  margin-left: 1rem;
}

.author p {
  font-weight: 700;
  font-size: 14px;
}

.author small {
  font-size: 12px;
}

.container {
  display: flex;
  margin-left: -1px;
  padding: 50px;
  justify-content: space-between;
}

h2 {
  text-align: center;
  padding-top: 50px;
}

.btn {
   margin-left: 46%;
   margin-top: 20px;
}

.btn-file {
    position: relative;
    overflow: hidden;
}

.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}

input[readonly] {
  background-color: white !important;
  cursor: text !important;
}

/* this is only due to codepen display don't use this outside of codepen */
.container {
  padding-top: 20px;
}

.edit {
  margin-left: 210px;
}

.btn-file {
    position: relative;
    overflow: hidden;
}

.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 100px;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
}

input[readonly] {
  background-color: white !important;
  cursor: text !important;
}

/* this is only due to codepen display don't use this outside of codepen */
.contaiiner {
  padding-top: 20px;
}
</style>