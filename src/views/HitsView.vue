<template>
  <div class="hits">
    <Overlay v-show="menuSmall == false"></Overlay>
    <h1>Chapter 2</h1>
    <p>Ich war heute nämlich Events shoppen... </p>
    <p>Wir haben am 1.Dezember und am 7.Dezember Veranstaltungen</p>
    <p>Eins von beiden ist sehr trashig und eins ist ein bisschen gediegener. Beide werden aber witzig! </p>
    <p>Aber ich will natürlich nicht zu viel verraten </p>
    <p>Und vielleicht holen wir dann nächsten Dienstag einfach unseren Dienstag von Gestern nach!? </p>
    <p>Aber das wichtigste kommt jetzt erst... (Chapter 3) </p>
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