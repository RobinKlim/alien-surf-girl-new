<template>
  <div class="pressKit">
    <Overlay
      v-if="mobileOrTablet"
      class="zIndex10"
      v-show="menuSmall == false"
    ></Overlay>
    <Overlay v-if="mobileOrTablet"></Overlay>
    <InformationBar
      v-if="mobileOrTablet"
      :informationText="informationText"
    ></InformationBar>
    <SpacerTop v-if="mobileOrTablet"></SpacerTop>
    <div class="pressCtr zIndex5">
      <div>
        <LiteYouTubeEmbed
          id="Bhfuq_gJun4"
          title="Alien Surf Girl feat. GI-MORE - Kein Weltuntergang (Live im Knust)"
          poster="maxresdefault"
        />
      </div>
      <p class="pressText">
        Die aus Hamburg stammende Popband Alien Surf Girl veröffentlicht am
        01.09.2023 ihre neue Single "Bad Trip”. Es ist die zweite
        Singleauskopplung aus dem im Februar 2024 erscheinenden Debütalbum.
        <br /><br />
        Das Debütalbum "Digitale Träume" ist sowohl
        musikalisch als auch visuell eine Hommage an die frühen 2000er. Weiß
        lackierte Fingernägel, die Eleganz von Feinripp und Silberschmuck werden
        mit einer weichen und zärtlichen Art kombiniert. Der Sound ist geprägt
        von groovy Basslines und durch Autotune stilisierten Vocals. Trotz der
        ruhigen Songs ist die Tanzbarkeit stets gegeben. Liedzeilen wie "Hast du
        keine Angst, dass du nur noch digital lebst”, “Surfe von Mitternacht /
        Bis halb acht” oder “ich gebe das Wort ein in die Suchmaschine” erzeugen
        ein nostalgisches Gefühl an die Y2K-Ära.
      </p>
      <img
        id="headerImg"
        src="../assets/PICS/Bandshot-black-Outfit-whitespace-Sofa-clean.jpg"
        alt="Bandfoto auf einer Couch mit weißem Hintergrund in schwarzen Outfits"
      />
      <iframe
        style="border-radius: 0px"
        src="https://open.spotify.com/embed/artist/5HJnjbg0jin1bXgPVKewQi?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <div class="gallery">
        <img
          id="headerImg"
          src="../assets/PICS/Bandshot-black-Outfit-whitespace-clean-original.jpg"
          alt="Bandfoto mit weißem Hintergrund in schwarzen Outfits"
        />
        <img
          id="headerImg"
          src="../assets/PICS/Bandshot-verregnete-Scheibe-Game-Over.jpg"
          alt="Bandfoto durch verregnete Scheibe für die EP Game Over"
        />
      </div>
      <div class="downloads">
        <p>
          Das Pressekit kann vollständig oder in Teilen aus unserer Cloud
          heruntergeladen werden:
        </p>
        <a
          href="https://drive.google.com/drive/folders/15tUOUxVaSy2n_x3YT6j_k-hmkiA1SakZ?usp=sharing"
        >
          <button>Download Pressekit</button>
        </a>
        <p>Der Techrider kann unter folgendem Link heruntergeladen werden:</p>
        <a
          href="https://docs.google.com/document/d/1yvjtBs8hdXed9xUMpgZ1aFzDCPgiVaA_/edit?usp=sharing&ouid=118010406697478185148&rtpof=true&sd=true"
        >
          <button>Download Techrider</button>
        </a>
      </div>
      <SpacerBottom></SpacerBottom>
    </div>
  </div>
</template>

<script setup>
import Overlay from "../components/Overlay";
import InformationBar from "../components/InformationBar";
import SpacerTop from "../components/SpacerTop";
import SpacerBottom from "../components/SpacerBottom";
import { ref } from "vue";
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

const iframe = ref(null);

iframe.value?.stopVideo();
iframe.value?.pauseVideo();
iframe.value?.playVideo();
</script>

<script>
export default {
  props: ["menuSmall", "mobileOrTablet"],
  components: { Overlay, InformationBar, SpacerTop, SpacerBottom },
  data() {
    return {
      informationText:
        "Das vollständige Pressekit steht weiter unten zum Download zur Verfügung",
    };
  },
};
</script>

<style scoped>
.pressKit {
  position: relative;
  height: 100%;
}
.pressCtr {
  height: 100%;
  padding: 0rem 1rem;
  overflow: auto;
  position: relative;
}
.pressCtr > * {
  padding: 1rem 0 0 0;
}
#headerImg {
  max-width: 100%;
}
.downloads > * {
  display: block;
  padding-bottom: 1rem;
}
@media (min-width: 768px) {
  .pressKit {
    max-width: 100%;
    margin: 0 auto;
  }
  .pressCtr {
    padding: 0;
  }
}

@media (min-width: 900px) {
  .pressKit {
    max-width: var(--desktopWidthSmall);
  }
}

@media (min-width: 1440px) {
  .pressKit {
    max-width: var(--desktopWidth);
  }
}
</style>