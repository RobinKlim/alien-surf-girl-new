<template>
  <div class="about">
    <Overlay v-if="mobileOrTablet" class="zIndex10" v-show="menuSmall == false"></Overlay>

    <InformationBar :informationText="this.informationText" v-if="mobileOrTablet"></InformationBar>
    <SpacerTop></SpacerTop>
    <SpacerTop v-if="mobileOrTablet"></SpacerTop>
    <div class="card-deck"  v-if="mobileOrTablet">
      <img class="single-card" id="cardJonas" src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png" @touchstart="saveClickPosition" @touchmove="moveImage" >
      <img class="single-card" id="cardCyrus" src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardPhilipp" src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardMorten" src="@/assets/SingleShots_Cards/Spielkarten_Morten.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      <img class="single-card" id="cardRobin" src="@/assets/SingleShots_Cards/Spielkarten_Robin.png" @touchstart="saveClickPosition" @touchmove="moveImage">
    </div>    
    <div class="card-desktop" v-else>
      <img src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png">
      <img src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png">
      <img src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png">
      <img src="@/assets/SingleShots_Cards/Spielkarten_Morten.png">
      <img src="@/assets/SingleShots_Cards/Spielkarten_Robin.png">
    </div>
    <SpacerTop v-if="!mobileOrTablet"></SpacerTop>
  </div>
</template>

<script>
import Overlay from '@/components/Overlay'
import InformationBar from '@/components/InformationBar'
import SpacerTop from '@/components/SpacerTop'

  export default {
    props: ['menuSmall', 'mobileOrTablet'],
    components: { Overlay, InformationBar, SpacerTop},
    data() {
      return {
        windowWidth: null,
        fingerClickStartPositionY: null,
        zIndexTop: null,
        clickedImage: null,
        reorderImageActive: true,
        informationText: "Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Band. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art."
      }
    },
    methods: {
      reorderImage(element) {
        // console.log("element")
        this.zIndexTop = getComputedStyle(element).getPropertyValue("z-index")

          //change order by changing zIndices
          const allSingleCardsArr = document.getElementsByClassName("single-card");

          for(let i = 0; i < allSingleCardsArr.length; i++){
            const zIndex = getComputedStyle(allSingleCardsArr[i]).getPropertyValue("z-index")
            if(zIndex == 1) {
              allSingleCardsArr[i].style.zIndex = 2
            }
            else if(zIndex == 2) {
              allSingleCardsArr[i].style.zIndex = 3
            }
            else if(zIndex == 3) {
              allSingleCardsArr[i].style.zIndex = 4
            }
            else if(zIndex == 4) {
              allSingleCardsArr[i].style.zIndex = 5
            }
            else if(zIndex == 5) {
              allSingleCardsArr[i].style.zIndex = 1
            }
          }
      },
      saveClickPosition(e) {
        this.fingerClickStartPositionX = e.changedTouches[0].pageX
      },
      moveImage(e) {
        this.clickedImage = e.target
        // console.log(this.clickedImage)
        this.zIndexTop = getComputedStyle(this.clickedImage).getPropertyValue("z-index")

        // check if selected card is on top
        if(this.zIndexTop == 5) {

          [...e.changedTouches].forEach(touch => {

            const X = this.fingerClickStartPositionX - touch.pageX
            this.clickedImage.style.left = 'calc(50% - ' + X + 'px)'

            if(X > 70 && this.reorderImageActive) {
              this.clickedImage.style.left = '-100%'
              // console.log("element")
              this.reorderImage(this.clickedImage)
              setTimeout(() => {
                this.clickedImage.style.left = '50%'
              }, 200);
            }
            if (X < 0){
              this.clickedImage.style.left = '50%'
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
  position: relative;
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
}
img {
  position: absolute;
  height: 100%;
  box-shadow: -4px 4px 20px rgba(0, 0, 0, 0.2);
}
#cardJonas {
  transform: translate(-49%, 4%) rotate(5deg);
  z-index: 1;
}
#cardMorten {
  transform: translate(-51%, 2%) rotate(-2deg);
  z-index: 2;
}
#cardPhilipp {
  transform: translate(-49%, 0) rotate(2deg);
  z-index: 3;
}
#cardRobin {
  transform: translate(-51%, -2%) rotate(-2deg);
  z-index: 4;
}
#cardCyrus {
  transform: translate(-49%, -4%) rotate(1deg);
  z-index: 5;
  /* animation: SwipeTeaser 2s linear 3; */
}

/* Swipe Trigger Picture Front */
@keyframes SwipeTeaser {
    0% {
      transform: translate(-49%, -4%) rotate(1deg);
    }
    50% {
      transform: translate(-59%, -4%) rotate(3deg);
    }
    100% {
      transform: translate(-49%, -4%) rotate(1deg);
    }
}

.single-card{
  left: 50%;
  transition: all 0.2s ease-in-out;
}

@media (min-width: 1024px) {
  .about {
    max-width: var(--screenWidth);
    margin: 0 auto
  }
  .card-desktop {
    position: relative;
    display: flex;
    height: 300px;
  }

  .about {
    overflow: scroll;
  }

  img {
    position: relative;
}

}


</style>