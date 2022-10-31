<template>
    <img src="@/assets/CD-ROM.png" class="navigation-home-img navigation" :class="{ navigationSmall: menuSmall}" alt="">
      <router-link class="navigation-home-list navigation" :class="{navigationSmall: menuSmall}" v-on="menuSmall ? {click: growMenu} : {}" to="/">
        <router-link to="/ueber" v-on="menuSmall == false ? {click: shrinkMenu} : {}">Über Uns</router-link>
        <router-link to="/" v-on="menuSmall == false ? {click: shrinkMenu} : {}">Hits</router-link>
        <router-link to="/" v-on="menuSmall == false ? {click: shrinkMenu} : {}">Kontakt</router-link>
        <router-link to="/" v-on="menuSmall == false ? {click: shrinkMenu} : {}">Shows</router-link>
      </router-link>
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
    // Verkleinern & nach unten schieben des Menüs
    shrinkMenu() {
      // Adapt Dimensions
      this.cDDimensions = this.cDDimensions * 2 / 7
      document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);
      // Activate class navigationSmall
      console.log("hello")
      this.menuSmall = true;
    },
    growMenu() {
      this.cDDimensions = this.cDDimensions * 7 / 2
      document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);
      // Deactivate class navigationSmall
      console.log("its me")
      this.menuSmall = false;
    },

  },
  // Breite der CD bekommen als CSS Variable und getWidth bei resize triggern
  mounted() {
    window.addEventListener('resize', this.getWidth);
    this.cDDimensions = document.querySelector('.navigation-home-list').clientWidth;
    document.documentElement.style.setProperty('--cDDimensions', `${this.cDDimensions}px`);
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

