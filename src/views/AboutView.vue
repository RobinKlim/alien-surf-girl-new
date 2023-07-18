<template>
  <div class="about">
    <CDCaseMobile v-if="mobileOrTablet && !hasRenderedCDCaseMobile" @cd-clicked="() => { this.$emit('cd-clicked'); }"></CDCaseMobile>
    <div v-if="mobileOrTablet" class="mobileContainer">
      <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
      <InformationBar :informationText="this.informationText"></InformationBar>
      <SpacerTop></SpacerTop>
      <SpacerTop ></SpacerTop>
      <div class="card-deck">
        <img class="single-card" id="cardJonas" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Jonas.png" @touchstart="saveClickPosition" @touchmove="moveImage" >
        <img class="single-card" id="cardCyrus" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Cyrus.png" @touchstart="saveClickPosition" @touchmove="moveImage">
        <img class="single-card" id="cardPhilipp" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Philipp.png" @touchstart="saveClickPosition" @touchmove="moveImage">
        <img class="single-card" id="cardMorten" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Morten.png" @touchstart="saveClickPosition" @touchmove="moveImage">
        <img class="single-card" id="cardRobin" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Robin.png" @touchstart="saveClickPosition" @touchmove="moveImage">
      </div>    
    </div>
    <div v-else>
      <div class="bandshotContainer">
        <img class="bandShot bandShotClean" src="@/assets/PICS/Bandshot-black-Outfit-freigestellt-clean.png" alt="Bandfoto mit in schwarzen Outfits freigestellt">
        <img v-if="!hoveredSingle" class="bandShot bandShotGlitch" src="@/assets/PICS/Bandshot-black-Outfit-freigestellt-Glitch.png" alt="Bandfoto mit in schwarzen Outfits freigestellt mit rot-blauen Glitch Effekt">
        <p> {{ informationText }}</p>
      </div>
      <div class="card-desktop" >
        <img class="single-card-desktop" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Jonas.png" data-card="Jonas" @mouseenter="togglePicture" @mouseleave="leavePicture">
        <img class="single-card-desktop" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Cyrus.png" data-card="Cyrus" @mouseenter="togglePicture" @mouseleave="leavePicture">
        <img class="single-card-desktop" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Philipp.png" data-card="Philipp" @mouseenter="togglePicture" @mouseleave="leavePicture">
        <img class="single-card-desktop" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Morten.png" data-card="Morten" @mouseenter="togglePicture" @mouseleave="leavePicture">
        <img class="single-card-desktop" src="@/assets/PICS/Einzelfotos-Sammelkarten-Kartenformat/Spielkarten_Robin.png" data-card="Robin" @mouseenter="togglePicture" @mouseleave="leavePicture">
      </div>      
      <SpacerTop></SpacerTop>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/Overlay'
import InformationBar from '@/components/InformationBar'
import SpacerTop from '@/components/SpacerTop'
import CDCaseMobile from '@/components/CDCaseMobile'

  export default {
    props: ['menuSmall', 'mobileOrTablet', 'hasRenderedCDCaseMobile'],
    components: { Overlay, InformationBar, SpacerTop, CDCaseMobile},
    data() {
      return {
        preloadedImages: {
          Jonas: '',
          Cyrus: '',
          Philipp: '',
          Morten: '',
          Robin: '',
          bandShot: ''
        },
        hoveredSingle: false,
        windowWidth: null,
        fingerClickStartPositionY: null,
        zIndexTop: null,
        clickedImage: null,
        cardIsMoving: false,
        intervalId: null,
        informationText: "Alien Surf Girl bringt verspielt Nu-Disco Pop in das Gewand einer 2000er Band. Weiß-lackierte Fingernägel, die Eleganz von Feinripp und Silber-Schmuck, kombiniert mit einer weichen und zärtlichen Art."
      }
    },
    mounted() {
      if(!this.mobileOrTablet) {
        this.animateCards();
        this.preloadImages()
        this.intervalId = setInterval(() => { 
          this.animateCards();
        }, 5000);
      };
    },
    unmounted() {  
      clearInterval(this.intervalId);  
    },


    methods: {
      reorderImage(element) {
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
        if(!this.cardIsMoving) {
          this.clickedImage = e.target
          this.zIndexTop = getComputedStyle(this.clickedImage).getPropertyValue("z-index")
          
          // check if selected card is on top
          if(this.zIndexTop == 5) {
            
            [...e.changedTouches].forEach(touch => {
              
              const X = this.fingerClickStartPositionX - touch.pageX
              this.clickedImage.style.left = 'calc(50% - ' + X + 'px)'
              
              if(X > 70) {
                this.cardIsMoving = true
                this.clickedImage.style.left = '-100%'
                this.reorderImage(this.clickedImage)
                setTimeout(() => {
                  this.clickedImage.style.left = '50%'
                  this.cardIsMoving = false
                }, 350);
              }
              if (X < 0){
                this.clickedImage.style.left = '50%'
              }
            })
  
          }
        }
      },

      preloadImages() {
      const imagePaths = {
        Jonas: require('@/assets/PICS/Einzelfotos-freigestellt-sitzend/Jonas-sitzend-freigestellt.png'),
        Cyrus: require('@/assets/PICS/Einzelfotos-freigestellt-sitzend/Cyrus-sitzend-freigestellt.png'),
        Philipp: require('@/assets/PICS/Einzelfotos-freigestellt-sitzend/Philipp-sitzend-freigestellt.png'),
        Morten: require('@/assets/PICS/Einzelfotos-freigestellt-sitzend/Morten-sitzend-freigestellt.png'),
        Robin: require('@/assets/PICS/Einzelfotos-freigestellt-sitzend/Robin-sitzend-freigestellt.png'),
        bandShot: require('@/assets/PICS/Bandshot-black-Outfit-freigestellt-clean.png'),
      };
        Object.entries(imagePaths).forEach(([key, src]) => {
          const tempImage = new Image();
          tempImage.src = src;
          tempImage.onload = () => {
            this.preloadedImages[key] = src; // Speichern Sie den vorgeladenen Bildpfad in der Datenvariable
          };
          tempImage.onerror = () => console.log(`Failed to preload image: ${src}`);
        });
      },

      togglePicture(e) {
          this.hoveredSingle = true
  
          const card = e.target.getAttribute('data-card');
          const newSrc = this.preloadedImages[card];
          const image = document.querySelector('.bandShotClean');
  
          image.src = newSrc;          
      },

      leavePicture() {
        this.hoveredSingle = false
        document.querySelector('.bandShotClean').src = this.preloadedImages.bandShot;
      },

      animateCards() {
        if(!this.hoveredSingle){
          const parentElement = document.querySelector('.card-desktop'); // Das Eltern-Element auswählen
          const children = parentElement.children; // Alle Kinder-Elemente auswählen
          const delay = 50;
  
          for (let i = 0; i < children.length; i++) {
            const childElement = children[i];
            childElement.style.transitionDelay = `${i * delay}ms`; // Verzögerung basierend auf dem Index festlegen
            childElement.style.transform = 'translateY(-15px) scale(1.02)';
          }
  
          setTimeout(() => {
            for (let i = 0; i < children.length; i++) {
              const childElement = children[i];
              childElement.style.transitionDelay = `${i * delay}ms`;
              childElement.style.transform = 'translateY(0px)';
            }
          }, 300); 
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
  animation: SwipeTeaser 2s linear 3;
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

@media (min-width: 768px) {
  .about {
    max-width: 100%;
    margin: 0 auto;
    overflow: auto;
  }
  .card-desktop {
    position: relative;
    display: flex;
    height: fit-content;
    width: 100%;
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
.single-card-desktop:hover {
  transform: translate(0px, -20px) !important;
  transition: all 0.2s ease-in-out;
}
.bandShotGlitch {
  opacity: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0%;
  animation: changeZIndex 10s infinite;
}

@keyframes changeZIndex {
      0% { opacity: 0%; }
      18% { opacity: 0%; }
      19% { opacity: 100%; }
      20% { opacity: 0%; }
      23% { opacity: 0%; }
      25.1% { opacity: 100%; }
      25.2% { opacity: 0%; }
      25.5% { opacity: 100%; }
      25.9% { opacity: 0%; }
      26% { opacity: 100%; }
      27% { opacity: 0%; }
      45% { opacity: 0%; }
      46% { opacity: 100%; }
      46% { opacity: 0%; }
      46.5% { opacity: 100%; }
      46.9% { opacity: 0%; }
      48% { opacity: 0%; }
      50% { opacity: 100%; }
      51% { opacity: 0%; }
      52% { opacity: 100%; }
      55% { opacity: 0%; }
      56% { opacity: 100%; }
      56.5% { opacity: 0%; }
      60% { opacity: 0%; }
      61% { opacity: 100%; }
      80% { opacity: 100%; }
      81% { opacity: 0%; }
      99% { opacity: 0%; }
      100% { opacity: 100%; }
    }
}

@media (min-width: 900px) {
  .about {
    max-width: var(--desktopWidthSmall);
  }
}

@media (min-width: 1440px) {
  .about {
    max-width: var(--desktopWidth);
  }
}

</style>