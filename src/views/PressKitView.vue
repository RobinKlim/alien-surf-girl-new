<template>
  <div class="pressKit">
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar :informationText="this.informationText"></InformationBar>
    <div class="pressCtr">
      <img id="headerImg" src="../assets/22.jpg" alt="">
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
        <img id="headerImg" src="../assets/22.jpg" alt="">
        <img id="headerImg" src="../assets/22.jpg" alt="">
        <img id="headerImg" src="../assets/22.jpg" alt="">
        <img id="headerImg" src="../assets/22.jpg" alt="">
        <img id="headerImg" src="../assets/22.jpg" alt="">
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
    </div>

    <!-- 1: großes Bandfoto
    2: Bio
    3. Livevideo
    3. Musicplayer
    4. Video
    5. Fotos
    6. Downloads
    7. Techrider
    8.  -->

  </div>
</template>

<script setup>
  import Overlay from '../components/Overlay'
  import InformationBar from '../components/InformationBar'
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
    props: ['menuSmall'],
    components: { Overlay, InformationBar},
    data() {
      return {
        informationText: "Pressekit +++ Das vollständige Pressekit steht weiter unten zum Download zur Verfügung +++ Pressekit"
      }
    }
  }
</script>

<style scoped>
.pressKit {
  font-size: large;
  height: 100%;
}
.pressCtr {
  height: 70%;
  padding: 1rem;
  overflow: scroll;
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

</style>