<template>
    <img v-if="this.mobileOrTablet" src="@/assets/CD-ROM.png" class="navigation-home-img navigation" :class="{navigationSmall: menuSmall}" alt="">
    <nav v-if="this.mobileOrTablet" class="navigation-home-list navigation navigationSmall2" :class="{navigationSmall: menuSmall}" >
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="about"  to="/ueber">Über uns</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="hits"  to="/hits">Hits</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="contact"  to="/kontakt">Kontakt</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="presskit"  to="/presskit">Pressekit</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="shows"  to="/shows">Shows</router-link>
      <router-link @click="resizeMenu()" :class="{disableClick: menuSmall}" class="shop"  to="/shop">Shop</router-link>
    </nav>
    <nav v-else class="navigation-desktop zIndex15">
      <div class="navigation-container">
        <router-link class="about"  to="/ueber">Über uns</router-link>
        <router-link class="hits"  to="/hits">Hits</router-link>
        <router-link class="contact"  to="/kontakt">Kontakt</router-link>
        <router-link class="presskit"  to="/presskit">Pressekit</router-link>
        <router-link class="shows"  to="/shows">Shows</router-link>
        <router-link class="shop"  to="/shop">Shop</router-link>
      </div>
    </nav>

    <router-view :menuSmall='this.menuSmall' :mobileOrTablet='this.mobileOrTablet'/>
</template>

<script>

export default{
  data() {
    return {
      menuSmall: false,
      screenWidth: null,
      rotationFirstDone: 0,
      mobileOrTablet: true, 
    }
  },
  methods: {
    // Breite der CD bekommen als CSS Variable
    getWidth() {
      this.screenWidth = document.querySelector('.navigation-home-list').clientWidth;
      
      this.cdDimensions = this.screenWidth < document.querySelector('.navigation-home-list').clientWidth ? this.screenWidth : this.screenWidth/2
      document.documentElement.style.setProperty('--screenWidth', `${this.screenWidth}px`);

      this.mobileOrTablet = window.innerWidth < 1024 ? true : false;
    },
    // grow/shrink menu 
    resizeMenu() {


      // shrink menu
      if(this.menuSmall == false) {
        setTimeout(()=> {document.querySelector(".navigation-home-list").addEventListener("click", this.resizeMenu);}, 1);

        const navigation = document.querySelectorAll(".navigation");
        navigation.forEach(element => {
          element.style.transform = `translate(-50%, 50%) rotate(${360+this.rotationFirstDone}deg) scale(0.25)`;
          element.style.animation = "rotationAnim-7ba5bd90 20s linear infinite 1s";
        });

        this.menuSmall = true;
      }


      // grow menu
      else {
        document.querySelector(".navigation-home-list").removeEventListener("click", this.resizeMenu);
        // Deactivate class navigationSmall

        const navigationSmall = document.querySelectorAll(".navigationSmall");
        navigationSmall.forEach(element => {
          element.style.animationPlayState = "paused";
          element.style.transform = "translate(-50%, 50%) rotate(0deg) scale(0.25)";
          element.style.animation = "none";
        });

        const navigation = document.querySelectorAll(".navigation");
        navigation.forEach(element => {
          setTimeout(()=> {element.style.transform = "translate(-50%, 50%) rotate(360deg) scale(1)";}, 1);
        })

        this.rotationFirstDone = 360;
        this.menuSmall = false;
      }
    },
  },
  // Breite der CD bekommen als CSS Variable und getWidth bei resize triggern
  mounted() {
    window.addEventListener('resize', this.getWidth);
    this.getWidth();
    document.documentElement.style.setProperty('--screenWidth', `${this.screenWidth}px`);
    },
  unmounted() {
    window.removeEventListener('resize', this.getWidth);
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
  transition: all linear 1s; 
  z-index: 11;
}
.navigationSmall {
  bottom: 10%;
}

.navigation-home-list{
  z-index: 12;
  transition: all linear 1s; 
  height: var(--screenWidth);
}

.navigation-desktop {
  display: flex;
  flex-direction: row;
}

.disableClick {
  pointer-events: none;
}
/* List and Font */
@font-face {
  font-family: "SeaweedScript";
  src: local("SeaweedScript"),   url(./assets/fonts/SeaweedScript-Regular.ttf) format("truetype");
}
a {
  position: absolute;
  font-family: "SeaweedScript", Helvetica, Arial;
  font-size: calc(var(--screenWidth) / 14);
  text-decoration: none;
}

.navigation-home-list a:nth-child(1) {
  top: 15%;
  left: 50%;
  translate: -50%;
}
.navigation-home-list a:nth-child(2) {
  left: 70%;
  top: 35%;
}
.navigation-home-list a:nth-child(3) {
  left: 70%;
  bottom: 35%;
}
.navigation-home-list a:nth-child(4) {
  bottom: 15%;
  left: 50%;
  translate: -50%;
}
.navigation-home-list a:nth-child(5) {
  right: 70%;
  bottom: 35%;
}
.navigation-home-list a:nth-child(6) {
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

@media (min-width: 1024px) {
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
  width: var(--desktopWidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
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
	background-image: url('/src/assets/CD-ROM.png');
	background-size: contain;
	background-repeat: no-repeat;
	transition: transform 0.3s ease;
	transform: translate(-50%, -50%) scale(0);
  z-index: -1;
}
  
  a:hover::after {
	transform: translate(-50%, -50%) scale(3);
  }
  
}

</style>

