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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero">
      <div class="container hero-grid">
        <div class="home-destaques">
          <h1>Madeira recuperada, <span>durável</span> e <span>certificada</span>. Pronta para instalar.</h1>
          <button class="botao-traco-g">Conheça as colheitas <img src={IconSeta} class="arrow" /></button>
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
              SIA Trecho 3<br />
              (61) 3031-4200
            </p>
          </div>
        </div>
      </div>
    </section>
    <ProdutosDestaque />
    <GridDestaque />
    <section class="background-verde-escuro">
      <div class="container">
          <div class="section-title-center">
              <div>
                  <h3>Processo de Transformação</h3>
                  <p>Selecionamos e renovamos as melhores peças, que ficam prontas para uma nova instalação.</p>
              </div>
          </div>
          <ColheitaProcessos />
          <LojasMin />
      </div>
    </section>
  </Layout>
)

export default IndexPage
