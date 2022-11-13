<template>
  <div class="shows">
    <Overlay v-show="menuSmall == false"></Overlay>
    <h1>Chapter 4</h1>
    <p>Ich bin der Meister der stringenten Erzählungenen, vielleicht sollte ich einen Roman schreiben? </p>
    <p>Bis bald ♥ </p>
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
</style>