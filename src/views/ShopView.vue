<template>
  <div class="shop">
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar :informationText="this.informationText"></InformationBar>
  </div>
</template>

<script>
import Overlay from '../components/Overlay'
import InformationBar from '@/components/InformationBar.vue';

  export default {
    props: ['menuSmall'],
    components: { Overlay, InformationBar },
    data() {
      return {
        informationText: "Bisher gibt es noch(!) keinen Onlinehop. Shirts, Poster, Feuerzeuge und Schlappen gibts auf unseren Konzerten! - Bisher gibt es noch(!) keinen Onlinehop. Shirts, Poster, Feuerzeuge und Schlappen gibts auf unseren Konzerten!"
      }
    }
  }
</script>

<style scoped>
.about {

  font-size: large;
}
p, h1 {
  padding: 5%;
}
</style>