import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="wrapper">
      <div class="start-info">
        <h1>Poligrafiabłysk z tradycjami.</h1>
        <p>
          Jesteśmy firmą działającą na rynku od 2010 roku, Wykonujemy zlecenia
          nisko i wysoko nakładowe, u nas mogą Państwo liczyć na fachową obsługę
          i szybie terminy realizacji powierzonych zadań. Istnieje możliwość
          skorzystania z usług grafika komputerowego.
        </p>
        <p>
          Posiadamy wysokiej jakości sprzęt poligraficzny dzięki któremu możemy
          profesjonalnie i w krótkim czasie wykonać wszelkie usługi
          poligrafizne.
        </p>
        W naszej ofercie znajdą Państwo szeroki wybór usług poligraficznych
        takich jak: Druk wielkoformatowy rysunków technicznych. Skanowanie
        wielkoformatowe, ksero. Grawerowanie laseren na wszelakiego rodzaju
        materiałach. Pieczątki, wizytówki, ulotki, plakaty. Druk offsetowy i
        cyfrowy. Laminowanie do formatu A2, oprawa prac. Foto nadruki na
        kubkach, poduszkach itp. Nadruki na koszulkach, reklamy zewnętrzne.
      </div>
      <div class="start-contact">
        Zapraszamy od poniedziałku do piątku w godzinach: od 9:00 do 17:00 tel.
        kom. 721 706 776 e-mail: poligrafiablysk@gmail.com ul. Gabriela
        Narutowicza 2A, 22-100 Chełm
      </div>
    </div>
  </Layout>
)

export default IndexPage
