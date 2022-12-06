<template>
  <div class="personalCard">
    <img id="mainImage" src="../assets/SingleShots/Morten.jpeg" alt="">
    <img id="overlay" src="../assets/PosterOverlay.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {

    console.log("hello")
  }
}
</script>

<style scoped>

.personalCard{
  position: relative;
  display: inline-block;
  margin: 3rem;
  border-radius: 20px;
  box-shadow: rgb(0, 0, 0) -10px 0px 13px -7px, rgb(0, 0, 0) 10px 0px 13px -7px, 5px 5px 15px 5px rgba(0,0,0,0);
}
img {
  display: block;
  height: 100%;
  border-radius: 20px;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

/* @font-face {
  font-family: "Audiowide-Regular";
  src: local("Audiowide-Regular"), url(../assets/fonts/Audiowide-Regular.ttf) format("truetype");
} */




</style>