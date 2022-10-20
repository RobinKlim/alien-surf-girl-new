<template>
  <div class="cd-rom-container">
    <img src="@/assets/cd_dvd_case.svg" alt="" class="cd-rom-case">
    <img src="@/assets/ToyBoy_Cover_Blue.jpg" alt="" class="cd-rom-cover">

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


.cd-rom-case {
  width: 100%;
}
.cd-rom-cover {
  position: absolute;
  width: 85%;
  left: 13%;
  top: 1%;
}


</style>