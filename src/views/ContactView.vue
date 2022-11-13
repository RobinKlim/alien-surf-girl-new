<template>
  <div class="contact">
    <Overlay v-show="menuSmall == false"></Overlay>
    <h1>Chapter 3</h1>
    <p>I am so ready for you! </p>
    <img src="@/assets/ready.png" alt="">
  </div>
</template>

<script>
import Overlay from '../components/Overlay'

  export default {
    props: ['menuSmall'],
    components: { Overlay },
  }
</script>

<style scoped>
.about {

  font-size: large;
}
p, h1 {
  padding: 5%;
}
img {
  margin: 5%;
  width: 60% ;
}
</style>