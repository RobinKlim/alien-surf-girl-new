<template>
    <nav class="navigation-home-container">
      <img src="@/assets/CD-ROM.png" class="navigation-home-img" alt="">
      <ul class="navigation-home-list">
        <li><a href="#">Hits</a></li>
        <li><a href="#">Shows</a></li>
        <li><a href="#">Über uns</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
<!--
<router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
-->
  <router-view/>
</template>

<style scoped>

/* Navigation Design*/
.navigation-home-container {
  position: fixed;
  width: 70%;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}
.navigation-home-img{
  width: 100%;
}
.navigation-home-list{
  width: 100%;
  height: 100%;
}

li {
  position: absolute;
  display: inline;
  transform-origin: left;
  left: 50%;
  top: 50%;
  translate: 0 -50% ;
  padding-left: 22%;
}

li:nth-child(2) {
  rotate: 90deg;
}
li:nth-child(3) {
  rotate: 180deg;
}
li:nth-child(4) {
  rotate: 270deg;
}


</style>
