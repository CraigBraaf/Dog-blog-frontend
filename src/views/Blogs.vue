<template>
<div class="card">
  <div class="card-header">
    <img src="{{ posts.photo }}" alt="">
  </div>
  <div class="card-content">
    <span>Technology</span>
    <h3>{{ posts.title }}</h3>
    <p>{{posts.description}}</p>
  </div>
  <div class="card-footer">
    <img src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80" alt="">
    <div class="author">
      <p>{{posts.username}}</p>
      <small>2h ago</small>
    </div>
  </div>
</div>
</template>

<script>
export default {
   data(){
      return {
       posts: [],
      };
},
mounted() {
    fetch ("https://d0g-blog.herokuapp.com/posts")
    .then((res) => res.json())
    .then((data) => (this.posts = data))
    .catch((err) => console.log(err.message));
  },
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

</style>