<template>
  <div class="home">
    <CDCover v-if="cdClicked === false" @click="opacityZero()" class="cd-cover"/>
  </div>
</template>

<script>
import CDCover from '../components/CDCover'

export default {
  name: 'HomeView',
  components: { CDCover},
  data() {
    return {
      cdClicked: false
    }
  },
  methods: {
    opacityZero() {
      document.querySelector(".cd-cover").style.opacity = "0"
      setTimeout(this.removeCoverDom, 1000)
    },
    removeCoverDom() {
      this.cdClicked = true;
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
.cd-cover {
  width: 80%;
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



</style>
