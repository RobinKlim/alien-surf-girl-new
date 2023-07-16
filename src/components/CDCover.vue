<template>
  <div class="cd-rom-container">
    <img src="@/assets/PICS/CD-Hülle-leer.svg" alt="CD-Hülle leer" class="cd-rom-case">
    <img src="@/assets/PICS/Toy_Boy_Single_Cover.jpg" alt="Cover von der Single Toy Boy" class="cd-rom-cover">
    <img src="@/assets/PICS/CD-Hülle-Overlay.svg" alt="CD-Hülle Overlay Noppen" class="cd-rom-overlay">
  </div>
</template>

<script>
export default {
  data( ) {
    return {
      CDclicked: false
    }
  }
}
</script>

<style scoped>

.cd-rom-container{
  position: relative;
}
.cd-rom-case {
  display: block;
  width: 100%;
}
.cd-rom-cover {
  position: absolute;
  width: 88%;
  right: 1.5%;
  top: 1.5%;
}
.cd-rom-overlay {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

</style>