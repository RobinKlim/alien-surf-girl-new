<template>
    <img src="@/assets/CD-ROM.png" class="navigation-home-img navigation" :class="{ navigationSmall: menuSmall}" alt="" @click="console.log('test')">
      <nav class="navigation-home-list navigation" id="teste" :class="{navigationSmall: menuSmall}">
        <router-link class="about"  to="/ueber">Über Uns</router-link>
        <router-link class="hits"  to="/hits">Hits</router-link>
        <router-link class="contact"  to="/kontakt">Kontakt</router-link>
        <router-link class="shows"  to="/shows">Shows</router-link>
      </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      menuSmall: false,
      cDDimensions: null
    }
  },
  methods: {
    // Breite der CD bekommen als CSS Variable
    getWidth() {
      this.cDDimensions = document.querySelector('.navigation-home-list').clientWidth;
      document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);
    },
    // grow/shrink menu 
    resizeMenu() {
      // shrink menu
      if(this.menuSmall == false) {
        this.cDDimensions = this.cDDimensions * 2 / 7
        document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);
        // Activate class navigationSmall
        this.menuSmall = true;
        // Remove click-Event from single Links
        document.querySelector(".about").removeEventListener("click", this.resizeMenu)
        document.querySelector(".hits").removeEventListener("click", this.resizeMenu)
        document.querySelector(".contact").removeEventListener("click", this.resizeMenu)
        document.querySelector(".shows").removeEventListener("click", this.resizeMenu)

        // document.querySelector("#teste").addEventListener("click", this.resizeMenu)

        setTimeout( () => {document.querySelector(".navigation-home-list").addEventListener("click", this.resizeMenu); }, 1);
      }
      // grow menu
      else {
        this.cDDimensions = this.cDDimensions * 7 / 2
        document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);
        // Deactivate class navigationSmall
        this.menuSmall = false;
        
        document.querySelector(".about").addEventListener("click", this.resizeMenu)
        document.querySelector(".hits").addEventListener("click", this.resizeMenu)
        document.querySelector(".contact").addEventListener("click", this.resizeMenu)
        document.querySelector(".shows").addEventListener("click", this.resizeMenu)

        setTimeout( () => {document.querySelector(".navigation-home-list").removeEventListener("click", this.resizeMenu); }, 1);
      }
    }
  },
  // Breite der CD bekommen als CSS Variable und getWidth bei resize triggern
  mounted() {
    window.addEventListener('resize', this.getWidth);
    this.cDDimensions = document.querySelector('.navigation-home-list').clientWidth;
    document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);

    document.querySelector(".about").addEventListener("click", this.resizeMenu)
    document.querySelector(".hits").addEventListener("click", this.resizeMenu)
    document.querySelector(".contact").addEventListener("click", this.resizeMenu)
    document.querySelector(".shows").addEventListener("click", this.resizeMenu)
    },
  unmounted() {
    window.removeEventListener('resize', this.getWidth);
  },

}
</script>

<style scoped>

/* Navigation Design*/
.navigation {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%) rotate(0deg);
  width: 70%;
  transition: all 1s; 
  /* animation: rotation 10s linear; */
}
.navigation-home-list{
  z-index: 10;
  height: var(--cDDimensions);
}
.navigationSmall {
  width: 20%;
  bottom: 10%;
  transform: translate(-50%, 50%) rotate(720deg);
  /* animation: rotation 10s linear infinite; */
}
.navigationSmall:hover {
  cursor: pointer;  
}
/* List and Font */
@font-face {
  font-family: "SeaweedScript";
  src: local("SeaweedScript"),   url(./assets/fonts/SeaweedScript-Regular.ttf) format("truetype");
}
a {
  position: absolute;
  font-family: "SeaweedScript", Helvetica, Arial;
  font-size: calc(var(--cDDimensions) / 12);
  transition: all 1s; 
  text-decoration: none;
}

.navigation-home-list a:nth-child(1) {
  top: 15%;
  left: 50%;
  translate: -50%;
  pointer-events: none;
}
.navigation-home-list a:nth-child(2) {
  left: 75%;
  top: 50%;
  translate: 0 -50%;
}
.navigation-home-list a:nth-child(3) {
  bottom: 15%;
  left: 50%;
  translate: -50%;
}
.navigation-home-list a:nth-child(4) {
  left: 10%;
  top: 50%;
  translate: 0 -50%;
}

/* Rotate animation */

@keyframes rotation {
    from {
      transform: translate(-50%, 50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, 50%) rotate(360deg);
    }
}


</style>

