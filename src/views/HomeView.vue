<template>
  <div class="home">
    <CDCover class="cd-cover"/>
  </div>
</template>

<script>
import CDCover from '../components/CDCover'

export default {
  name: 'HomeView',
  components: { CDCover,},
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/Bandshot_roof.jpg");
  backdrop-filter: opacity(50%);
  background-size: cover;
  background-position: center center;
}

.cd-cover {
  animation: pulse 2s ease-in-out infinite
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
