<template>
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
   <img    
        src="https://i.pinimg.com/originals/26/00/e0/2600e0f43d0508a559d51bd312b8f221.png"
        height="50"
        alt=""
        loading="lazy"
      />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" router-link to="/">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" router-link to="/Blogs">Blogs</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" router-link to="/Login">Login</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" router-link to="/Register">Register</router-link>
      </li>
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
</template>

<script>
const buttons = document.querySelectorAll(
  '[data-carousel-button]'
);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset =
      button.dataset.carouselButton === 'next'
        ? 1
        : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector(
      '[data-active]'
    );
    let newIndex =
      [...slides.children].indexOf(activeSlide) +
      offset;
    if (newIndex < 0)
      newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length)
      newIndex = 0;

    slides.children[
      newIndex
    ].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});



</script>

<style>
.navbar-nav {
  margin-left: auto;
  font-size: 20px;
}
</style>
