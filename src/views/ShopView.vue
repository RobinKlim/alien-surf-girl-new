<template>
  <div class="shop">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false" ></Overlay>
    <InformationBar :informationText="this.informationText" v-if="mobileOrTablet"></InformationBar>
    <SpacerTop></SpacerTop>
    <p>{{ informationText }}</p>
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
        informationText: "Bisher gibt es noch keinen Onlinehop. Shirts, Poster, Feuerzeuge und Schlappen gibts auf unseren Konzerten."
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

@media (min-width: 768px) {
  .shop {
    max-width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 900px) {
  .shop {
    max-width: var(--desktopWidthSmall);
  }
}

@media (min-width: 1440px) {
  .about {
    max-width: var(--desktopWidth);
  }
}

</style>