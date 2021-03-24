import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProdutosReparos from "../components/elementos/produtos-reparos"
import LojasReparo from "../components/elementos/lojas-reparos"

import IconSeta from "../images/icon-seta-verde.svg"
import TacoGIF from "../images/profissional-taco-comp-gif.gif"
import Taco721 from "../images/profissional-taco-reparo7x21.jpeg"
import ImgPro01 from "../images/pro-img-01.jpeg"
import ImgPro02 from "../images/pro-img-02.jpeg"
import ImgPro03 from "../images/pro-img-03.jpeg"
import DurevoleParaPro from "../images/durevole-para-pro.svg"

const Reparos = () => (
  <Layout>
    <SEO title="Para Reparos" />
    <div class="profissionais-logo">
        <img src={DurevoleParaPro} />
    </div>
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
    </div>
    <div class="margem-5p"></div>
    <div class="profissionais-amigo">
        <div class="container profissionais-amigo-grid">
            <div class="">
                <h4>Descubra porque os pisos para reparo da Durevole são os melhores amigos do raspador</h4>
                <ul>
                    <li>Tacos já selecionados</li>
                    <li>Sem pregos e limpo nas duas faces</li>
                    <li>Espessura mínima da aba de 4mm</li>
                    <li>Pronto para Instalação</li>
                </ul>
                <button class="botao-redondo">Compre agora</button>
            </div>
            <img src={Taco721} />
        </div>
    </div>
    <div class="margem-5p"></div>
    <div class="container">
        <ProdutosReparos />
    </div>
    <div class="margem-5p"></div>
    <div class="section-title-center">
        <h3>Maior agilidade nos seus reparos</h3>
        <p>Não perca mais tempo procurando peças de Taco em bom estado, selecionando e limpando o material.</p>
        <p>Sabemos que esse processo pode custar o seu tempo e prolongar sua obra.</p>
        <p>Por isso fomos atrás das <b>melhores peças de madeira nobre</b>, resgatando seu aspecto único ao remover toda a sujeira como os pregos e cola que atrapalhavam na hora de sua nova instalação.</p>
    </div>
    <div class="container reparo-images-grid">
        <img src={ImgPro03} alt="" />
        <img src={ImgPro01} alt="" />
        <img src={ImgPro02} alt="" />
    </div>
    <div class="margem-5p"></div>
    <section id="lojas" class="background-verde-escuro">
      <div class="container">
          <LojasReparo />
      </div>
    </section>
  </Layout>
)

export default Reparos