<template>
  <div class="hits">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar v-if="mobileOrTablet" :informationText="this.informationText" ></InformationBar>
    <SpacerTop v-if="mobileOrTablet"></SpacerTop>
    <div class="videos">
      <div v-for="(value, key) in musicVideos" :key="key" :value="value">
        <div class="videoSingle">
          <LiteYouTubeEmbed
          class="video"
          :id=value.id
          ref="iframe"
          :title=value.title
          poster="maxresdefault"
          />    
        </div>
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
    data() {
      return {
        musicVideos: {
          keinWeltuntergang: {
            id: "cG6kAhcg5dE",
            title: "Alien Surf Girl - Kein Weltuntergang (Offizielles Musikvideo)"
          },
          euphorie: {
            id: "t16AnvCneaM",
            title: "Alien Surf Girl - Euphorie (Offizielles Musikvideo)"
          },
          toyBoy: {
            id: "hzKgcljKxiI",
            title: "Alien Surf Girl - Toy Boy (Offizielles Musikvideo)"
          },
          toyBoy2: {
            id: "hzKgcljKxiI",
            title: "Alien Surf Girl - Toy Boy (Offizielles Musikvideo)"
          },
        },
        informationText: "Groovige Basslines à la Parcels, eingängige Synthy-Klängen von The Weeknd und geschmackvoller Gesang inspiriert von Falco. Dazu eine Prise Disco-Gitarre und tanzbare four-on-the-floor Beats."
      }
    },
    props: ['menuSmall', 'mobileOrTablet'],
    components: { Overlay, InformationBar, SpacerTop, SpacerBottom }
  }
</script>

<style scoped>
.hits {
  height: 100%;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
}
p, h1 {
  padding: 5%;
}
.videoSingle {
  padding-bottom: 1rem;
}
.videos {
  height: 100%;
  padding: 0rem 1rem;
  overflow: scroll;
}
@media (min-width: 1024px) {
  .hits {
    max-width: var(--desktopWidth);
    margin: 0 auto
  }
  .videos {
    padding: 0;
  }
}


</style>