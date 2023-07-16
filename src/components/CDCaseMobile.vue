<template>
  <div class="cdCaseMobile">
    <CDCover @click="opacityZero()" class="cd-cover"/>
  </div>
</template>

<script>
import CDCover from '../components/CDCover'

export default {
  props: ['menuSmall'],
  components: { CDCover },
  methods: {
    opacityZero() {
      document.querySelector(".cd-cover").style.opacity = "0"
      setTimeout(() => {
        this.$emit('cd-clicked'); 
      },
      800)
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
.cdCaseMobile {
  width: 100vw;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
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
