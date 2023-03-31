<template>
  <div class="informationTextContainer zIndex1">
      <p class="informationText"> +++ {{ this.informationText }} +++ </p>
  </div>
</template>

<script>
export default {
data( ) {
  return {
    informationTextLength: "null",
  }
},
props: ['informationText'], 
mounted() {
    // get Header width
    this.informationTextLength = document.querySelector('.informationText').clientWidth;
    document.documentElement.style.setProperty('--newsTextWidth', `${this.informationTextLength}px`)
    // get windwow width
    this.windowWidth = document.querySelector('html').clientWidth;
    document.documentElement.style.setProperty('--windowWidth', `${this.windowWidth}px`)

}
}
</script>

<style scoped>

.informationTextContainer {
position: relative;
background-color: rgba(255, 255, 255);
}
.informationText {
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

</style>