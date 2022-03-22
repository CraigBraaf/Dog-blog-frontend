<template>

<section>
    <div class="hover-slide">
            <router-link :to="{name: 'Register'}" class="btn btn-default start-me">Create Blog</router-link>
    </div>

    <div class="carousel-inner">
        <!--specify first slide-->
        <div class="item active">
            <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_28/1587661/dogs-age-years-kb-inline-200707.jpg">
        </div>
    </div>

</section>
</template>

<script>

</script>

<style scoped>



.carousel .item {
    width: 100%;
    height: 100%;
 }

.carousel .item img {
    width: 100%;
    height: 100%;
}

.btn.start-me {margin: 0 auto;}


</style>