<template>
  <div class="pressKit">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false"></Overlay>
    <Overlay v-if="mobileOrTablet"></Overlay>

    <InformationBar  v-if="mobileOrTablet" :informationText="this.informationText"></InformationBar>
    <SpacerTop v-if="mobileOrTablet"></SpacerTop>
    <div class="pressCtr zIndex5">
      <img id="headerImg" src="../assets/PICS/Bandshot.jpg" alt="">
      <p class="pressText"> Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art. Musikalisch bewegen Sie sich zwischen groovigen Basslines à la Parcels, den eingängigen Synthy-Klängen von The Weeknd und geschmackvollen Gesang inspiriert von Falco. Dazu eine Prise Disco-Gitarre und tanzbare four-on-the-floor Beats. <br/><br/> 
        „Die Euphorie hört nie mehr auf!“ Zuversichtlich und euphorisch tritt Alien Surf Girl einer verschmutzen, grauen und lauten Welt entgegen. Wo bleibt der versprochene Weltuntergang? Sind wir schon Game Over? In dieser dystopisch wirkenden Realität schaffen sie sich ihren eigenen Raum. Der Moment lädt ein die Augen zu schließen und zu dancen als gäbe es kein Morgen mehr.
      </p>
      <div class="ctr">
        <LiteYouTubeEmbed
          id="dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
        />
      </div>
      <p> Der Release ihrer Debüt-EP „GAME OVER“ schließt für die Band zwei emotionale, entbehrungsreiche und wunderbare Jahre ab. Seid gespannt und lasst euch von Alien Surf Girl in neue Soundwelten entführen.</p>
      <iframe style="border-radius:0px" src="https://open.spotify.com/embed/artist/5HJnjbg0jin1bXgPVKewQi?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <div class="gallery">
        <img id="headerImg" src="../assets/PICS/Bandshot_Glitch_quer_rb.jpg" alt="">
        <img id="headerImg" src="../assets/PICS/Bandshot_169.jpg" alt="">
      </div>
      <div class="downloads">
        <p>
          Das Pressekit kann vollständig oder in Teilen aus unserer Cloud heruntergeladen werden:
        </p>
        <a href="https://drive.google.com/drive/folders/1zQvCbaGN7RpqcWTTV_T2HFept-P-OVla?usp=sharing">
          <button>Download Pressekit</button>
        </a>
        <p>
          Der Techrider kann unter folgendem Link heruntergeladen werden:
        </p>
        <a href="https://docs.google.com/document/d/1yvjtBs8hdXed9xUMpgZ1aFzDCPgiVaA_/edit?usp=sharing&ouid=118010406697478185148&rtpof=true&sd=true">
          <button>Download Techrider</button>
        </a>
      </div>
      <SpacerBottom></SpacerBottom>
    </div>
  </div>
</template>

<script setup>
  import Overlay from '../components/Overlay'
  import InformationBar from '../components/InformationBar'
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
    components: { Overlay, InformationBar, SpacerTop, SpacerBottom},
    data() {
      return {
        informationText: "Das vollständige Pressekit steht weiter unten zum Download zur Verfügung"
      }
    }
  }
</script>

<style scoped>
.pressKit {
  position: relative;
  height: 100%;
}
.pressCtr {
  height: 100%;
  padding: 0rem 1rem;
  overflow: scroll;
  position: relative;
}
.pressCtr > *{
  padding: 0 0 1rem 0;
}
#headerImg {
  max-width: 100%;
}
.downloads > * {
  display: block;
  padding-bottom: 1rem;
}
@media (min-width: 1024px) {
  .pressKit {
    max-width: var(--desktopWidth);
    margin: 0 auto
  }
}


</style>