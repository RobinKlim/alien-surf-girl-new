<template>
  <div class="shows">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar v-if="mobileOrTablet" :informationText="this.informationText"></InformationBar>
    <SpacerTop v-if="mobileOrTablet" ></SpacerTop>
    <div class="gigsCtr">
      <article class="gigSingle">
        <h2>Konzert-Titel</h2>
        <p><strong>Datum:</strong> 01. April 2023</p>
        <p><strong>Uhrzeit:</strong> 20:00 Uhr</p>
        <p><strong>Veranstaltungsort:</strong> Musterhalle, Musterstraße 1, 12345 Musterstadt</p>
        <p><strong>Eintrittspreis:</strong> 25,00 €</p>
        <p><strong>Veranstalter:</strong> Max Mustermann Konzertagentur</p>
        <p><strong>Webseite:</strong> <a href="https://www.example.com">www.example.com</a></p>
      </article>
      <LiteYouTubeEmbed
          id="dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
        />
      <!-- <article class="gigSingle">
        <h2>Konzert-Titel</h2>
        <p><strong>Datum:</strong> 01. April 2023</p>
        <p><strong>Uhrzeit:</strong> 20:00 Uhr</p>
        <p><strong>Veranstaltungsort:</strong> Musterhalle, Musterstraße 1, 12345 Musterstadt</p>
        <p><strong>Eintrittspreis:</strong> 25,00 €</p>
        <p><strong>Veranstalter:</strong> Max Mustermann Konzertagentur</p>
        <p><strong>Webseite:</strong> <a href="https://www.example.com">www.example.com</a></p>
      </article> -->
      <SpacerBottom></SpacerBottom>
    </div>
  </div>
</template>

<script setup>
  import Overlay from '../components/Overlay'
  import InformationBar from '@/components/InformationBar.vue';
  import SpacerTop from '../components/SpacerTop'
  import SpacerBottom from '../components/SpacerBottom'
  import { ref } from 'vue'
  import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
  import 'vue-lite-youtube-embed/style.css'

  const iframe = ref(null)

  iframe.value?.stopVideo()
  iframe.value?.pauseVideo()
  iframe.value?.playVideo()
</script>

<script>
  export default {
    props: ['menuSmall', 'mobileOrTablet'],
    components: { Overlay, InformationBar, SpacerTop, SpacerBottom },
    data() {
      return {
        informationText: "Die Hits von Alien Surf Girl wollen live gehört werden. Komm zu unseren nächsten Konzerten!"
      }
    }
  }
</script>

<style scoped>
.shows {
  position: relative;
  height: 100%;
}
.gigsCtr {
  height: 100%;
  padding: 0rem 1rem;
  overflow: scroll;
}
.gigSingle{
  padding-bottom: 1rem;
}
@media (min-width: 1024px) {
  .shows {
    max-width: var(--screenWidth);
    margin: 0 auto
  }
}


</style>