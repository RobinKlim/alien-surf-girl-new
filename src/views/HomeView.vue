<template>
  <div class="home">
    <div @click="opacityZero()" class="cd-rom-container-all">
      <CDCover class="cd-cover"/>
      <div class="navigation-home-container">
        <img src="@/assets/CD-ROM.png" class="navigation-home-img" alt="">
        <nav class="navigation-home">
          <ul>
            <li><a href="#">Ey Sarah,</a></li>
            <li><a href="#">mein Y2K -Girl</a></li>
            <li><a href="#">wir haben</a></li>
            <li><a href="#">Samstag</a></li>
            <li><a href="#">ein Date.</a></li>
            <li><a href="#">Kennst du</a></li>
            <li><a href="#">Würfel & Zucker?</a></li>
            <li><a href="#">( ͡° ͜ʖ ͡°) </a></li>
          </ul>
        </nav>    
      </div>
    </div>
  </div>
</template>

<script>
import CDCover from '../components/CDCover'

export default {
  name: 'HomeView',
  components: { CDCover,},
  data() {
    return {
      CDNotClicked: true
    }
  },
  methods: {
    opacityZero() {
      document.querySelector(".cd-cover").style.opacity = "0"
    }
  }
}
</script>

<style scoped>

/* CD placement & background */
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/Bandshot_roof.jpg");
  background-size: cover;
  background-position: center center;
}
.cd-rom-container-all {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
}

.cd-cover {
  animation: pulse 2s ease-in-out infinite;
  transition: 1s;
  z-index: 10;
}
@keyframes pulse {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.04;
  }
  100% {
    scale: 1;
  }
}

/* Navigation Design*/
.navigation-home-container {
  position: absolute;
  width: 85%;
  left: 13%;
  top: 1%;
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
