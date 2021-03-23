import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProdutosReparos from "../components/elementos/produtos-reparos"

import IconSeta from "../images/icon-seta-verde.svg"
import TacoGIF from "../images/profissional-taco-comp-gif.gif"

const Reparos = () => (
  <Layout>
    <SEO title="Para Reparos" />
    <div class="container">
        <div class="section-title-center">
            <h1>Ganhe tempo na obra</h1>
            <p class="destaque-light">Amigo raspador, já pensou conseguir economizar tempo nos seus reparos?</p>
        </div>
        <div class="profissionais-grid">
            <div>
                <p>Pensando em você, desenvolvemos um produto exclusivo para profissionais que trabalham com raspagem e restauro de pisos de madeira.</p>
                <p>O Taco Durevole 7×21 cm garante alta performance nos restauros e reparos. Reaproveitado, ele é selecionado e limpo nas duas faces – sem pregos ou sujeira. É só tirar da caixa e começar a instalar, sem dores de cabeça.</p>
                <button class="botao-traco-g">Veja o vídeo <img src={IconSeta} class="arrow" /></button>
                <div class="margem-5p"></div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9sfg3ZoeH0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <img src={TacoGIF} alt="" />
        </div>
        <div class="">
            <div class="">
                <h3>Descubra porque os pisos para reparo da Durevole são os melhores amigos do raspador</h3>
                <ul>
                    <li>Tacos já selecionados</li>
                    <li>Sem pregos e limpo nas duas faces</li>
                    <li>Espessura mínima da aba de 4mm</li>
                    <li>Pronto para Instalação</li>
                </ul>
                <button class="">Compre agora</button>
            </div>
            <img class="" />
        </div>
        <div class="margem-5p"></div>
        <ProdutosReparos />
    </div>
    <div class="margem-5p"></div>
  </Layout>
)

export default Reparos