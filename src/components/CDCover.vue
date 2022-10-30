<template>
  <div class="cd-rom-container">
    <img src="@/assets/cd_case.svg" alt="" class="cd-rom-case">
    <img src="@/assets/Toy_Boy_Single_Cover.jpg" alt="" class="cd-rom-cover">
    <img src="@/assets/cd_case_overlay.svg" alt="" class="cd-rom-overlay">
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