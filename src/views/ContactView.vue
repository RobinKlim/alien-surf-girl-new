<template>
  <div class="contact">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar v-if="mobileOrTablet" :informationText="this.informationText"></InformationBar>
    <div class="content">
      <div class="mail">
        <p>Alien Surf Girl GbR</p>
        <p>aliensurfgirl.official@gmail.com</p>
      </div>
      <div class="social-media">
        <a href="https://open.spotify.com/artist/5HJnjbg0jin1bXgPVKewQi?si=FwWzzR1CTbGTEWAk3_Sdmw">
          <img src="@/assets/icons/spotify.svg" class="svg-icon" alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UCDReVbsgHdMurAxZqj661hg">
          <img src="@/assets/icons/youtube.svg" class="svg-icon" alt="" />
        </a>
        <a href="https://www.instagram.com/aliensurfgirlmusik">
          <img src="@/assets/icons/instagram.svg" class="svg-icon" alt="" />
        </a>
        <a href="https://www.tiktok.com/@aliensurfgirl">
          <img src="@/assets/icons/tiktok.svg" class="svg-icon" alt="" />
        </a>
      </div>
      <router-link to="/impressum">
        <button class="imprintBTN">Impressum</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Overlay from '../components/Overlay'
import InformationBar from '../components/InformationBar.vue'

  export default {
    props: ['menuSmall', 'mobileOrTablet'],
    components: { Overlay, InformationBar },
    data() {
      return {
        informationText: "Anfragen für Gigs bitte über Email, ansonsten sind wir am besten über Instagram zu erreichen."
      }
    }
  }
</script>

<style scoped>

.contact {
  position: relative;
  height: 100%;
}

  .content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 2rem;
  }
  .mail p {
    text-align: center;
  }
  .social-media {
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
  }

  .social-media a img {
    transition: all 0.2s ease-in-out;
  }
  .social-media a img:active, .social-media a img:hover {
    filter: invert(46%) sepia(99%) saturate(752%) hue-rotate(194deg) brightness(105%) contrast(93%);
  transform: scale(1.5);
    }

  img {
    height: 30px;
  }
  @media (min-width: 768px) {
  .contact {
    max-width: 100%;
    margin: 0 auto
  }
  .svg-icon {
    fill: black;
  }
  .social-media {
    display: flex;
    max-width: 360px;

    justify-content: space-around;
    align-items: center;
  }

  .contact {
  position: relative;
  height: 50%;
  }
}
@media (min-width: 1440px) {
  .contact {
    max-width: var(--desktopWidth);
  }
}


</style>