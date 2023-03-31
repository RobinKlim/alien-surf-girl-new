<template>
  <div class="hits">
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar :informationText="this.informationText"></InformationBar>
    <div class="videos">
      <div v-for="(value, key) in musicVideos" :key="key" :value="value">
        <div class="videoSingle">
          <LiteYouTubeEmbed
          class="video"
          :id=value.id
          ref="iframe"
          :title=value.title
          />    
        </div>
      </div>
    </div>
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
        },
        informationText: "Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art."
      }
    },
    props: ['menuSmall'],
    components: { Overlay, InformationBar }
  }
</script>

<style scoped>
.hits {
  height: 100%;
}
p, h1 {
  padding: 5%;
}
.videoSingle {
  padding:  0.5rem 0;
}
.videos {
  height: 70%;
  padding: 1rem;
  overflow: scroll;
}


</style>