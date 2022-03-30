<template>

<section id="home">
      <h1>EVERYTHING, ALL THINGS DOG!</h1>
    <h2>Share your dog knowledge1</h2>  
<div class="wrapper">

  <a href="/Login">CREATE POST</a>
</div>
    </section>
</template>

<script>

</script>

<style scoped>

#home{
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg");

}

*,
*:before,
*:after{
  box-sizing: border-box;
}

.wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a{
  display: block;
  width: 250px;
  height: 50px;
  line-height: 46px;
  text-decoration: none;
  text-align: center;
  border-radius: 50px;
  border: 3px solid rgb(105, 26, 26);
  color: rgb(105, 26, 26);
  font-size: 20px;
  font-family: arial;
  position: relative;
  overflow: hidden;
  background: transparent;
  text-transform: uppercase;
  transition: all .35s;
}

a:before,
a:after{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: -100%;
  left: 0;
  background: rgb(105, 26, 26);
  z-index: -1;
  transition: all .35s;
}

a:before{
  opacity: .5;
}

a:after{
  transition-delay: .2s;
}

a:hover{
  color: rgb(255, 255, 255);
}

a:hover:before,
a:hover:after{
  top: 0;
}

h1 h2 {
    text-align: center;
}

</style>