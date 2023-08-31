<template>
  <div class="shows">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar v-if="mobileOrTablet" :informationText="informationText"></InformationBar>
    <SpacerTop v-if="mobileOrTablet" ></SpacerTop>
    <div class="gigsCtr">
      <div class="songkick-widget-container">
        <a href="https://www.songkick.com/artists/10228142" 
        class="songkick-widget" 
        data-theme="dark" 
        data-track-button="on" 
        data-detect-style="on" 
        data-background-color="rgb(0,0,0,1)" 
        data-font-color="rgb(255,255,255,1)" 
        data-locale="en" 
        data-other-artists="on" 
        data-share-button="on" 
        data-country-filter="on"
        data-max-width="1200px"
        >
        </a>
      </div>
      <LiteYouTubeEmbed
          id="94RzTmH9it8"
          title="Alien Surf Girl - Aliens im Wunderland (Live im Knust)"
          poster="maxresdefault"
        />
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
    },
    mounted() {
    // Skript zum Laden des Songkick-Widgets
      const script = document.createElement('script');
      script.src = '//widget-app.songkick.com/injector';
      document.body.appendChild(script);
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
  overflow: auto;
}

@media (min-width: 768px) {
  .shows {
    max-width: 100%;
    margin: 0 auto
  }
  .gigsCtr {
    padding: 1rem 0rem 0rem 0rem;
  }
}

@media (min-width: 900px) {
  .shows {
    max-width: var(--desktopWidthSmall);
  }
}


@media (min-width: 1440px) {
  .shows {
    max-width: var(--desktopWidth);
  }
}



</style>