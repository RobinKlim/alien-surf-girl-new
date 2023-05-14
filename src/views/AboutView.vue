<template>
  <div class="about">
    <div v-if="mobileOrTablet" class="mobileContainer">
      <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
      <InformationBar :informationText="this.informationText"></InformationBar>
      <SpacerTop></SpacerTop>
      <SpacerTop ></SpacerTop>
      <div class="card-deck">
        <img class="single-card" id="cardJonas" src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png" @touchstart="saveClickPosition" @touchmove="moveImage" >
        <img class="single-card" id="cardCyrus" src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png" @touchstart="saveClickPosition" @touchmove="moveImage">
        <img class="single-card" id="cardPhilipp" src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png" @touchstart="saveClickPosition" @touchmove="moveImage">
        <img class="single-card" id="cardMorten" src="@/assets/SingleShots_Cards/Spielkarten_Morten.png" @touchstart="saveClickPosition" @touchmove="moveImage">
        <img class="single-card" id="cardRobin" src="@/assets/SingleShots_Cards/Spielkarten_Robin.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      </div>    
    </div>
    <div v-else>
      <div class="bandshotContainer">
        <img class="bandShot bandShotClean" src="@/assets/PICS/Bandshot_Clean_web.jpg" alt="">
        <img class="bandShot bandShotGlitch" src="@/assets/PICS/Bandshot_Glitch_quer_rb.jpg" alt="">
        <p> {{ informationText }}</p>
      </div>
      <div class="card-desktop" >
        <img src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png">
        <img src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png">
        <img src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png">
        <img src="@/assets/SingleShots_Cards/Spielkarten_Morten.png">
        <img src="@/assets/SingleShots_Cards/Spielkarten_Robin.png">
      </div>      <div class="card-desktop" >
        <img src="@/assets/SingleShots_Cards/Spielkarten_Jonas.png">
        <img src="../assets/SingleShots_Cards/Spielkarten_Cyrus.png">
        <img src="@/assets/SingleShots_Cards/Spielkarten_Philipp.png">
        <img src="@/assets/SingleShots_Cards/Spielkarten_Morten.png">
        <img src="@/assets/SingleShots_Cards/Spielkarten_Robin.png">
      </div>

      <SpacerTop></SpacerTop>
    </div>
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
.mobileContainer {
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
    max-width: var(--desktopWidth);
    margin: 0 auto;
  }
  .card-desktop {
    position: relative;
    display: flex;
    height: fit-content;
    width: 100%;
  }

  .about {
  }

  .card-desktop img {
    display: block;
    position: relative;
    width: 20%;
    transform: translate(0px, -0px);
    transition: all 0.2s ease-in-out;
    z-index: 5;
}
.card-desktop img:hover {
  transform: translate(0px, -15px);
  transition: all 0.2s ease-in-out;
}
.bandShot {
  display: block;
  width: 100%;
  position: relative;
}
.bandshotContainer {
  position: relative;
}
.bandshotContainer p {
  position: absolute;
  z-index: 5;
  top: 50px;
  left: 50px;
  width: 20%;
  text-align: justify;
}
.bandShotGlitch {
  position: absolute;
  top: 0;
  z-index: -1;
  animation: changeZIndex 10s infinite;
}
@keyframes changeZIndex {
      0% { z-index: -1; }
      19% { z-index: -1; }
      20% { z-index: 1; }
      25.1% { z-index: -1; }
      25.2% { z-index: 1; }
      25.5% { z-index: -1; }
      25.9% { z-index: 1; }
      21% { z-index: -1; }
      46% { z-index: -1; }
      46% { z-index: 1; }
      46.5% { z-index: -1; }
      46.9% { z-index: 1; }
      48% { z-index: -1; }
      50% { z-index: -1; }
      51% { z-index: 1; }
      52% { z-index: -1; }
      55% { z-index: 1; }
      56% { z-index: -1; }
      60% { z-index: 1; }
      61% { z-index: -1; }
      100% { z-index: -1; }
    }
}

</style>