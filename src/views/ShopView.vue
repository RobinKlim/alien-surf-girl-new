<template>
  <div class="shop">
    <Overlay class="zIndex10" v-show="menuSmall == false" ></Overlay>
    <InformationBar :informationText="this.informationText" v-if="mobileOrTablet"></InformationBar>
    <SpacerTop></SpacerTop>
    <SpacerBottom></SpacerBottom>
  </div>
</template>

<script>
import Overlay from '../components/Overlay'
import InformationBar from '@/components/InformationBar.vue';
import SpacerTop from '../components/SpacerTop'
import SpacerBottom from '../components/SpacerBottom'

  export default {
    props: ['menuSmall', 'mobileOrTablet'],
    components: { Overlay, InformationBar, SpacerTop, SpacerBottom},
    data() {
      return {
        informationText: "Bisher gibt es noch(!) keinen Onlinehop. Shirts, Poster, Feuerzeuge und Schlappen gibts auf unseren Konzerten!"
      }
    }
  }
</script>

<style scoped>
.shop {
  position: relative;
  height: 100%;
}
p, h1 {
  padding: 5%;
}
</style>