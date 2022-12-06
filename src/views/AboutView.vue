<template>
  <div class="about" >
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <Overlay></Overlay>
    <div class="newsTextContainer zIndex5">
      <p class="newsText">+++ Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art. +++</p>
    </div>
    <PersonalCard class="middleZ"></PersonalCard>

  </div>


</template>

<script>
import Overlay from '../components/Overlay'
import PersonalCard from '../components/PersonalCard'

  export default {
    props: ['menuSmall'],
    components: { Overlay, PersonalCard },
    data() {
      return {
        newsText: null,
        windowWidth: null,
      }
    },
    mounted() {
      // get Header width
      this.newsText = document.querySelector('.newsText').clientWidth;
      document.documentElement.style.setProperty('--newsTextWidth', `${this.newsText}px`)
      // get windwow width
      this.windowWidth = document.querySelector('html').clientWidth;
      document.documentElement.style.setProperty('--windowWidth', `${this.windowWidth}px`)
    }
  }
</script>

<style scoped>

/* Structure */
.about {
  height: 100%;
}
/* Moving News header */
.newsTextContainer {
  position: relative;
  background-color: rgba(255, 255, 255);
}
.newsText {
  width: max-content;
  line-height: 3rem;
  animation: flagFromRight 30s linear infinite;
}
.personalCard {
  z-index: 5;
  margin-top: 15%;
  height: 60%;
}


/* News Header Animation */
@keyframes flagFromRight {
    from {
      translate: var(--windowWidth);
    }
    to {
      translate: calc(var(--newsTextWidth) * -1 );
    }
}

</style>