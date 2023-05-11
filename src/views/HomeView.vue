<template>
  <div class="home">
    <CDCover v-if="cdClicked === false" @click="opacityZero()" class="cd-cover"/>
  </div>
</template>

<script>
import CDCover from '../components/CDCover'

export default {
  name: 'HomeView',
  props: ['menuSmall'],
  components: { CDCover },
  data() {
    return {
      cdClicked: false
    }
  },
  methods: {
    opacityZero() {
      document.querySelector(".cd-cover").style.opacity = "0"
      setTimeout(this.removeCoverDom, 800)
    },
    removeCoverDom() {
      this.cdClicked = true;
    },
    getDimensions() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
}
</script>

<style scoped>

/* CD placement & background */
.home {
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/PICS/Bandshot_Glitch_hoch_rb.jpg");
  background-size: cover;
  background-position: center center;  
  background-attachment: fixed;
}
.cd-cover {
  width: 90%;
  animation: pulse 2s ease-in-out infinite;
  transition: 0.8s;
  z-index: 15;
  box-shadow: rgb(0, 0, 0) -10px 0px 13px -7px, rgb(0, 0, 0) 10px 0px 13px -7px, 5px 5px 15px 5px rgba(0,0,0,0);
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
