<template>
  <div class="about" >
    <Overlay v-show="menuSmall == false"></Overlay>
    <div class="newsTextContainer">
      <p class="newsText">+++ Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art. +++</p>
    </div>
    <PersonalCard></PersonalCard>

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
        windowWidth: null
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

/* Moving News header */
.about {
  overflow: hidden;
  min-height: 100%;
}
.newsTextContainer {
  background-color: rgba(255, 255, 255, 0.9);
}
.newsText {
  display: block;
  width: max-content;
  animation: flagFromRight 30s linear infinite;
}

.personalCard {
  height: 300px;
}


/* News Header Animation */
@keyframes flagFromRight {
    from {
      translate: 352px;
      /* translate: var(--windowWidth); */
    }
    to {
      translate: calc(var(--newsTextWidth) * -1 );
    }
}

</style>