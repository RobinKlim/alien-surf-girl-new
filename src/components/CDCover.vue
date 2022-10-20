<template>
  <div class="cd-rom-container">
    <img src="@/assets/cd_dvd_case.svg" alt="" class="cd-rom-case">
    <img src="@/assets/ToyBoy_Cover_Blue.jpg" alt="" class="cd-rom-cover">
    <div class="navigation-home-container">
      <img src="@/assets/CD-ROM.png" class="navigation-home-img" alt="">
      <nav class="navigation-home">
        <ul>
          <li><a href="#">Hits</a></li>
          <li><a href="#">Shows</a></li>
          <li><a href="#">Über</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Kontakt</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </nav>    
    </div>
  </div>
</template>

<script>
export default {
  data( ) {
    return {
      CDclicked: false
    }
  }
}
</script>

<style scoped>

.cd-rom-container {
  position: relative;
  width: 70%;
}
.cd-rom-case {
  width: 100%;
}
.cd-rom-cover {
  position: absolute;
  width: 85%;
  left: 13%;
  top: 1%;
}

/* Navigation Design*/
.navigation-home-container {
  position: absolute;
  width: 85%;
  left: 13%;
  top: 1%;
  z-index: -1;
}
.navigation-home-img{
  width: 100%;
}
.navigation-home{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
ul {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
li {
  position: absolute;
  transform-origin: left;
  display: inline;
  left: 50%;
  padding-left: 23%;
}
li:nth-child(1) {
  rotate: 45deg;
}
li:nth-child(2) {
  rotate: 90deg;
}
li:nth-child(3) {
  rotate: 135deg;
}
li:nth-child(4) {
  rotate: 180deg;
}
li:nth-child(5) {
  rotate: 225deg;
}
li:nth-child(6) {
  rotate: 270deg;
}
li:nth-child(7) {
  rotate: 315deg;
}
li:nth-child(7) {
  rotate: 315deg;
}

</style>