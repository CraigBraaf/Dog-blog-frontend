<template>
   <div class="social-menu">
        <ul>
            <li><a href="https://github.com/CraigBraaf/" target="blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/wooffwoooff/" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/craig-braaf-a04511217/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
<section id="home">
  <div class="heading">
      <h1>EVERYTHING, ALL THINGS DOG!</h1>
    <h2>Share your dog knowledge!</h2>  
    </div>
<div class="wrapper">

  <a href="/register">CREATE POST</a>
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
  border: 3px solid rgb(0, 0, 0);
  color: rgb(5, 5, 5);
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
  background: rgb(255, 51, 0);
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

.heading {
    text-align: center;
    padding-top: 250px;
}
h2{
  font-size: 50px;
  color: black;
}

h1 {
  font-size: 80px;
  color: rgb(255, 51, 0);
  
}
.social-menu ul{
    position: absolute;
    top: 90%;
    left: 50%;
    padding: 0;
    margin: 0;
    transform: translate(-50%, -50%);
    display: flex;
}

.social-menu ul li{
    list-style: none;
    margin: 0 15px;
}

.social-menu ul li .fab{
    font-size: 30px;
    line-height: 60px;
    transition: .3s;
    color: #000;
}

.social-menu ul li .fab:hover{
    color: #fff;
}

.social-menu ul li a{
    position: relative;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    transition: .6s;
    box-shadow: 0 5px 4px rgba(0,0,0,.5);
}

.social-menu ul li a:hover{
    transform: translate(0, -10%);
}

.social-menu ul li:nth-child(1) a:hover{
    background-color: rgba(0, 0, 0, 0.829);
}
.social-menu ul li:nth-child(2) a:hover{
    background-color: #E4405F;
}
.social-menu ul li:nth-child(3) a:hover{
    background-color: #0077b5;
}
.social-menu ul li:nth-child(4) a:hover{
    background-color: #000;
}
</style>