<template>
    <img v-if="this.mobileOrTablet" src="@/assets/PICS/CD-ROM.png" class="navigation-home-img navigation" :class="{navigationSmall: menuSmall}" alt="">
    <nav v-if="this.mobileOrTablet" ref="navigationHomeListMobile" class="navigation-mobile navigation navigationSmall2" :class="{navigationSmall: menuSmall}" >
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="about"  to="/ueber">Über uns</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="hits"  to="/hits">Hits</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="contact"  to="/kontakt">Kontakt</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="presskit"  to="/presskit">Pressekit</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="shows"  to="/shows">Shows</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="shop"  to="/shop">Shop</router-link>
    </nav>
    <nav ref="navigationHomeListMobileDesktop" v-else class="navigation-desktop zIndex15">
      <div class="navigation-container">
        <router-link class="about"  to="/ueber">Über uns</router-link>
        <router-link class="hits"  to="/hits">Hits</router-link>
        <router-link class="contact"  to="/kontakt">Kontakt</router-link>
        <h1 class="headline">Alien Surf Girl</h1>
        <router-link class="presskit"  to="/presskit">Pressekit</router-link>
        <router-link class="shows"  to="/shows">Shows</router-link>
        <router-link class="shop"  to="/shop">Shop</router-link>
      </div>
    </nav>

    <router-view :menuSmall='this.menuSmall' :mobileOrTablet='this.mobileOrTablet' :hasRenderedCDCaseMobile='this.hasRenderedCDCaseMobile' @cd-clicked="() => {this.hasRenderedCDCaseMobile = true}"/>
</template>

<script>

export default{
  data() {
    return {
      menuSmall: false,
      screenWidth: null,
      rotationFirstDone: 0,
      mobileOrTablet: true,
      hasRenderedCDCaseMobile: false,
    }
  },
  methods: {
    // Breite der CD bekommen als CSS Variable
    getDimensions() {
      if(this.mobileOrTablet) {
        this.screenWidth = this.$refs.navigationHomeListMobile.clientWidth;
        
        this.cdDimensions = this.screenWidth < this.$refs.navigationHomeListMobile.clientWidth ? this.screenWidth : this.screenWidth/2
        document.documentElement.style.setProperty('--screenWidth', `${this.screenWidth}px`);
      }

      this.mobileOrTablet = window.innerWidth < 768 ? true : false;
    },
    // grow/shrink menu 
    resizeMenu() {

      // shrink menu
      if(this.menuSmall == false) {

        setTimeout(()=> {document.querySelector(".navigation-mobile").addEventListener("click", this.resizeMenu);}, 1);

        this.menuSmall = true;
      }

      // grow menu
      else {
        document.querySelector(".navigation-mobile").removeEventListener("click", this.resizeMenu);

        this.rotationFirstDone = 360;
        this.menuSmall = false;
      }
    },
  },
  // Breite der CD bekommen als CSS Variable und getDimensions bei resize triggern
  mounted() {
    window.addEventListener('resize', this.getDimensions);
    this.getDimensions();
    document.documentElement.style.setProperty('--screenWidth', `${this.screenWidth}px`);
    },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },

}
</script>

<style scoped>

/* Navigation Design*/
.navigation {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%) rotate(0deg) scale(1);
  width: 80%;
  transition: all linear 0.7s; 
  z-index: 11;
}
.navigationSmall {
  bottom: 10%;
  transform: translate(-50%, 50%) rotate(360deg) scale(0.25);
}

.navigation-mobile{
  z-index: 12;
  transition: all linear 0.7s; 
  height: var(--screenWidth);
}

.navigation-desktop {
  display: flex;
  flex-direction: column;
}

.disableClick {
  pointer-events: none;
}
/* List and Font */
a {
  position: absolute;
  font-family: Audiowide-Regular, Arial, sans-serif !important;
  font-size: calc(var(--screenWidth) / 20);
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.navigation-mobile a:nth-child(1) {
  top: 15%;
  left: 50%;
  translate: -50%;
}
.navigation-mobile a:nth-child(2) {
  left: 70%;
  top: 35%;
}
.navigation-mobile a:nth-child(3) {
  left: 70%;
  bottom: 35%;
}
.navigation-mobile a:nth-child(4) {
  bottom: 15%;
  left: 50%;
  translate: -50%;
}
.navigation-mobile a:nth-child(5) {
  right: 70%;
  bottom: 35%;
}
.navigation-mobile a:nth-child(6) {
  right: 70%;
  top: 35%;
}

/* Rotate animation */

@keyframes rotationAnim {
  from {
    transform: translate(-50%, 50%) rotate(0deg) scale(0.25);
  }
  to {
    transform: translate(-50%, 50%) rotate(360deg) scale(0.25);
  }
}

@media (min-width: 768px) {
  a {
  position: relative;
  font-size: 1rem;
  text-decoration: none;
  font-family: Audiowide-Regular, Arial, sans-serif !important;
  padding: 1rem;
  z-index: 50;
  transition: transform 0.3s ease;
	transform: scale(1);
}

a:hover {
  transform: scale(1.2);
}

.navigation-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.navigation-desktop {
  border-bottom: 2px solid black;
}
  
  a::after {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40px;
	height: 40px;
	background-image: url('/src/assets/PICS/CD-ROM.png');
	background-size: contain;
	background-repeat: no-repeat;
	transition: transform 0.3s ease;
	transform: translate(-50%, -50%) scale(0) rotate(0deg);
  z-index: -1;
}
  
  a:hover::after {
	transform: translate(-50%, -50%) scale(2) rotate(360deg);
  }

  .headline {
    z-index: 15;
    padding: 0;
    font-size: 2.5rem;
    color: white;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
    font-family: Audiowide-Regular, Arial, sans-serif !important;
    text-align: center;
  }
}

.impressumText {
  padding: 1rem;
  overflow: auto
}

@media (min-width: 1440px) {
  .navigation-container {
    max-width: 1920px;
  }
  .headline {
    font-size: 4rem;
  }
}


</style>

