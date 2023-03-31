<template>
  <div class="shows">
    <Overlay class="zIndex10" v-show="menuSmall == false"></Overlay>
    <InformationBar :informationText="this.informationText"></InformationBar>
    <div class="gigsCtr">
      <article class="gigSingle">
        <h2>Konzert-Titel</h2>
        <p><strong>Datum:</strong> 01. April 2023</p>
        <p><strong>Uhrzeit:</strong> 20:00 Uhr</p>
        <p><strong>Veranstaltungsort:</strong> Musterhalle, Musterstraße 1, 12345 Musterstadt</p>
        <p><strong>Eintrittspreis:</strong> 25,00 €</p>
        <p><strong>Veranstalter:</strong> Max Mustermann Konzertagentur</p>
        <p><strong>Webseite:</strong> <a href="https://www.example.com">www.example.com</a></p>
      </article>
      <!-- <article class="gigSingle">
        <h2>Konzert-Titel</h2>
        <p><strong>Datum:</strong> 01. April 2023</p>
        <p><strong>Uhrzeit:</strong> 20:00 Uhr</p>
        <p><strong>Veranstaltungsort:</strong> Musterhalle, Musterstraße 1, 12345 Musterstadt</p>
        <p><strong>Eintrittspreis:</strong> 25,00 €</p>
        <p><strong>Veranstalter:</strong> Max Mustermann Konzertagentur</p>
        <p><strong>Webseite:</strong> <a href="https://www.example.com">www.example.com</a></p>
      </article> -->
    </div>
  </div>
</template>

<script>
import Overlay from '../components/Overlay'
import InformationBar from '@/components/InformationBar.vue';

  export default {
    props: ['menuSmall'],
    components: { Overlay, InformationBar },
    data() {
      return {
        informationText: "Die Hits von Alien Surf Girl wollen live gehört werden. Komm zu unseren nächsten Konzerten! Die Hits von Alien Surf Girl wollen live gehört werden. Komm zu unseren nächsten Konzerten!"
      }
    }
  }
</script>

<style scoped>
.about {
  font-size: large;
}
.gigsCtr {
  padding: 1rem;
}
.gigSingle{
  padding-bottom: 1rem;
}

</style>