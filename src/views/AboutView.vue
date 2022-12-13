<template>
  <div class="about" >
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <Overlay></Overlay>
    <div class="newsTextContainer zIndex5">
      <p class="newsText">+++ Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art. +++</p>
    </div>
    <div class="card-deck">
      <img id="cardJonas" src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png">
      <img id="cardCyrus" src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png" @click="moveImage">
      <img id="cardPhilipp" src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png">
      <img id="cardMorten" src="@/assets/SingleShots_Cards/Spielkarten_Morten.png">
      <img id="cardRobin" src="@/assets/SingleShots_Cards/Spielkarten_Robin.png">
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
      // add eventlistener to Top card
      if(5 == 5) {
        console.log("sheesh")
      }
    },
    methods: {
      moveImage() {
        console.log("test")
        const value = document.getElementById("cardCyrus").style.getPropertyValue("z-index")
        console.log(value)

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
#cardJonas {
  left: 50%;
  translate: -49% 4%;
  rotate: 5deg;
  z-index: 1;
}
#cardMorten {
  left: 50%;
  translate: -51% 2%;
  rotate: -3deg;
  z-index: 2;
}
#cardPhilipp {
  left: 50%;
  translate: -49%;
  rotate: 2deg;
  z-index: 3;
}
#cardRobin {
  left: 50%;
  translate: -51% -2%;
  rotate: -2deg;
  z-index: 4;
}
#cardCyrus {
  left: 50%;
  translate: -49% -4%;
  rotate: 1deg;
  z-index: 5;
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