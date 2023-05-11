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
        <a href="https://open.spotify.com/artist/5HJnjbg0jin1bXgPVKewQi?si=So8VMe_dS0CDYV2GzRmHuQ&dl_branch=1">
          <img src="/spotify.svg" alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UCDReVbsgHdMurAxZqj661hg">
          <img src="youtube.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/aliensurfgirlofficial">
          <img src="instagram.svg" alt="" />
        </a>
        <a href="https://www.tiktok.com/@aliensurfgirl">
          <img src="tiktok.svg" alt="" />
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
  }
  
  .content > * {
    padding-bottom: 15%;
  }
  content {
    height: 100%;
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

  img {
    height: 30px;
  }
  @media (min-width: 1024px) {
  .contact {
    max-width: var(--desktopWidth);
    margin: 0 auto
  }
}

</style>