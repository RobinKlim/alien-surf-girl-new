<template>
  <div class="about" >
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <Overlay></Overlay>
    <div class="newsTextContainer zIndex5">
      <p class="newsText">+++ Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art. +++</p>
    </div>
    <div class="card-deck">
      <img v-for="(name, index) in names" :key="names[index]" @click="index == 4 ? moveImage() : ''" :src="require(`@/assets/SingleShots_Cards/Spielkarten_${name}.png`)">
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/Overlay'

  export default {
    props: ['menuSmall'],
    components: { Overlay },
    data() {
      return {
        newsText: null,
        windowWidth: null,
        names: ["Jonas", "Robin", "Philipp", "Cyrus", "Morten"],
      }
    },
    mounted() {
      // get Header width
      this.newsText = document.querySelector('.newsText').clientWidth;
      document.documentElement.style.setProperty('--newsTextWidth', `${this.newsText}px`)
      // get windwow width
      this.windowWidth = document.querySelector('html').clientWidth;
      document.documentElement.style.setProperty('--windowWidth', `${this.windowWidth}px`)
    },
    methods: {
      moveImage() {
        console.log("test")
        this.names.push(this.names.shift())
      }
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

/* News Header Animation */
@keyframes flagFromRight {
    from {
      translate: var(--windowWidth);
    }
    to {
      translate: calc(var(--newsTextWidth) * -1 );
    }
}

/* KartenDeck */
.card-deck {
  position: relative;
  height: 50%;
  margin-top: 15%;
}
img {
  position: absolute;
  height: 100%;
  box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.2);
}
img:nth-child(1) {
  left: 50%;
  translate: -49% 4%;
  rotate: 5deg;
}
img:nth-child(2) {
  left: 50%;
  translate: -51% 2%;
  rotate: -3deg;
}
img:nth-child(3) {
  left: 50%;
  translate: -49%;
  rotate: 2deg;
}
img:nth-child(4) {
  left: 50%;
  translate: -51% -2%;
  rotate: -2deg;
}
img:nth-child(5) {
  left: 50%;
  translate: -49% -4%;
  rotate: 1deg;
  /* animation: SwipeTeaser 2s linear 3; */
}

/* Swipe Trigger Picture Front */
@keyframes SwipeTeaser {
    0% {
      translate: -49% -4%;
      rotate: 1deg;
    }
    50% {
      translate: -59% -4%;
      rotate: 3deg;
    }
    100% {
      translate: -49% -4%;
      rotate: 1deg;
    }
}


</style>