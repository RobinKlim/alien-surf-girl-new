<template>
  <div class="about" >
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <Overlay></Overlay>
    <InformationBar :informationText="this.informationText"></InformationBar>
    <div class="card-deck">
      <img class="single-card" id="cardJonas" src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardCyrus" src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardPhilipp" src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardMorten" src="@/assets/SingleShots_Cards/Spielkarten_Morten.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardRobin" src="@/assets/SingleShots_Cards/Spielkarten_Robin.png" @touchstart="saveClickPosition" @touchmove="moveImage">
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/Overlay'
import InformationBar from '@/components/InformationBar'

  export default {
    props: ['menuSmall'],
    components: { Overlay, InformationBar },
    data() {
      return {
        windowWidth: null,
        fingerClickStartPositionY: null,
        informationText: "Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Boyband. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art."
      }
    },
    mounted() {
      // add eventlistener to Top card
      document.getElementById("cardCyrus").addEventListener("touchend", this.reorderImage);
    },
    methods: {
      reorderImage(element) {
          const zIndexTop = getComputedStyle(element).getPropertyValue("z-index")

            //change order by changing zIndices
            const allSingleCardsArr = document.getElementsByClassName("single-card");

            for(let i = 0; i < allSingleCardsArr.length; i++){
              const zIndex = getComputedStyle(allSingleCardsArr[i]).getPropertyValue("z-index")
              if(zIndex == 1) {
                allSingleCardsArr[i].style.zIndex = 2
              }
              if(zIndex == 2) {
                allSingleCardsArr[i].style.zIndex = 3
              }
              if(zIndex == 3) {
                allSingleCardsArr[i].style.zIndex = 4
              }
              if(zIndex == 4) {
                allSingleCardsArr[i].style.zIndex = 5
              }
              if(zIndex == 5) {
                allSingleCardsArr[i].style.zIndex = 1
              }
            }
      },
      saveClickPosition(e) {
        this.fingerClickStartPositionX = e.changedTouches[0].pageX
      },
      moveImage(e) {

        const clickedImage = e.target
        const zIndexTop = getComputedStyle(clickedImage).getPropertyValue("z-index")

        // check if selected card is on top
        if(zIndexTop == 5) {

          [...e.changedTouches].forEach(touch => {

            const X = this.fingerClickStartPositionX - touch.pageX
            clickedImage.style.left = 'calc(50% - ' + X + 'px)'

            if(X > 70) {
              clickedImage.style.left = '-100%'
              this.reorderImage(clickedImage)
              setTimeout(() => {
                clickedImage.style.left = '50%'
              }, 400);
            }
            if (X < 0){
              clickedImage.style.left = '50%'
            }
          })

        }
      },
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
  translate: -49% 4%;
  rotate: 5deg;
  z-index: 1;
}
#cardMorten {
  translate: -51% 2%;
  rotate: -3deg;
  z-index: 2;
}
#cardPhilipp {
  translate: -49%;
  rotate: 2deg;
  z-index: 3;
}
#cardRobin {
  translate: -51% -2%;
  rotate: -2deg;
  z-index: 4;
}
#cardCyrus {
  translate: -49% -4%;
  rotate: 1deg;
  z-index: 5;
  /*animation: SwipeTeaser 2s linear 3;*/
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

.single-card{
  left: 50%;
  transition: all 0.2s ease-in-out;
}

</style>