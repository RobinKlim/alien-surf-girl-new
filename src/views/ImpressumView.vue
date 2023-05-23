<template>
  <div class="impressum">
    <Overlay v-if="this.mobileOrTablet" v-show="menuSmall == false"></Overlay>
    <div class="header">
      <h1>Impressum</h1>
      <router-link to="/kontakt">
        <button class="imprintBTN">Zurück</button>
      </router-link>
    </div>
    <div class="impressumText">
      <p>
        <br />
        Angaben gemäß § 5 TMG:
        <br /><br />
        Alien Surf Girl GbR vertreten durch Philipp Burkart, Robin
        Klimczak, Jonas Paelt, Cyrus Feuerriegel und Morten Lagemann
        Email: aliensurfgirl.official@gmail.com Internet:
        www.aliensurfgirl.com
        <br /><br />
        Wenn vorhanden: Umsatzsteueridentifikationsnummer gemäß § 27a
        Umsatzsteuergesetz: DE 42/651/02242
        <br /><br />
        <span class="fat">Haftungsausschluss:</span>
        <br /><br />
        Haftung für Inhalte
        <br />
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt
        erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
        der Inhalte können wir jedoch keine Gewähr übernehmen. Als
        Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
        verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
        gespeicherte fremde Informationen zu überwachen oder nach
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
        Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
        jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
        Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
        <br /><br />
        Haftung für Links
        <br />
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf
        deren Inhalte wir keinen Einfluss haben. Deshalb können wir
        für diese fremden Inhalte auch keine Gewähr übernehmen. Für
        die Inhalte der verlinkten Seiten ist stets der jeweilige
        Anbieter oder Betreiber der Seiten verantwortlich. Die
        verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
        mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
        zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
        Links umgehend entfernen.
      </p>
      <br/>
      <p>@2023 Alien Surf Girl. All rights reserved.</p>
      <SpacerBottom></SpacerBottom>
    </div>
</div>
</template>

<script>
import Overlay from '../components/Overlay'
import SpacerBottom from '../components/SpacerBottom'


  export default {
    props: ['menuSmall'],
    components: { Overlay, SpacerBottom },
  }
</script>

<style scoped>
.impressum {
  height: 100%;
  overflow: auto;
}
.impressumText {
  padding: 1rem;
  overflow: auto;
}
.imprintBTN {
  margin: 1rem;
}
.header {
  display: flex;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .impressum {
    overflow: auto;
    max-width: 100%;
    margin: 0 auto;
  }
  .impressumText {
    padding: 0;
  }
}

@media (min-width: 900px) {
  .impressum {
    max-width: var(--desktopWidthSmall);
  }
}


@media (min-width: 1440px) {
  .impressum {
    max-width: var(--desktopWidth);
  }
}


</style>