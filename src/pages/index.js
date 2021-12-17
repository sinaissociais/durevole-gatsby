import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GridDestaque from "../components/elementos/grid-destaque"
import ProdutosDestaque from "../components/elementos/produtos-destaque"
import ColheitaProcessos from '../components/elementos/colheita-processos'
import LojasMin from '../components/elementos/lojas-min'

import IconSeta from '../images/icon-seta-branca.svg'

import VideoDurevole from '../videos/durevole-intro.mp4'
import VideoDurevolePo from '../videos/hero-imagem.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Madeira recuperada, durável e certificada" description="Nós trazemos vida nova a madeiras nobres, antes descartadas. Após um processo rigoroso de seleção, fazemos a recuperação de madeiras para nova instalação." />
    <section class="hero" >
    <video
                  className="hero-video-player"
                  poster={VideoDurevolePo}
                  height="100%"
                  width="100%"
                  loop
                  muted
                  autoPlay
                >
                  <source
                    src={VideoDurevole}
                    type="video/mp4"
                  />
      </video>
      <div class="container hero-grid">
        <div class="home-destaques">
          <p class="destaque-pequeno">Pisos, Revestimentos e Decks</p>
          <h1>Madeira <span>recuperada</span>, <span>durável</span> e <span>certificada</span>. Pronta para instalar.</h1>
          <div class="hero-botoes">
            <Link to="/colecoes/"><button class="botao-traco-g">Coleções <img src={IconSeta} class="arrow" /></button></Link>
            <Link to="/oficina/"><button class="botao-traco-g">Peças sob medida <img src={IconSeta} class="arrow" /></button></Link>
          </div>
        </div>
        <div class="home-lojas">
          <div>
            <b>São Paulo</b>
            <p>
              Mosarte & CO.<br />
              Al. Gabriel Monteiro da Silva, 1556
              Jardins<br />
              (11) 3081-2826
            </p>
            <p>
              Mosarte & CO. – D&D Shopping<br />
              AV. das Nações Unidas, 12555 – Cidade Monções<br />
              (11) 4195-0031
            </p>
          </div>
          <div>
            <b>Brasília</b>
            <p>
              São Geraldo<br />
              SIA Trecho 3<br />
              (61) 3031-4200
            </p>
            <p>
              São Geraldo<br />
              QI 5 do Lago Sul<br />
              (61) 99506-5542
            </p>
          </div>
        </div>
      </div>
    </section>
    <GridDestaque />
    <ProdutosDestaque />
    <div class="margem-5p"></div>
    <section class="background-verde-escuro">
      <div class="container">
          <div class="section-title-center">
              <div>
                  <h3>Processo de Transformação</h3>
                  <p>Selecionamos e renovamos as melhores peças, que ficam prontas para uma nova instalação. Durevole-T.</p>
              </div>
          </div>
          <ColheitaProcessos />
          <LojasMin />
      </div>
    </section>
  </Layout>
)

export default IndexPage
