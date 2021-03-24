import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IconSeta from '../images/icon-seta-verde.svg'

import ProdutosReparos from "../components/elementos/produtos-reparos"

const Reparos = () => (
  <Layout>
    <SEO title="Para Reparos" description="Os Tacos de Madeira Recuperada Durevole garantem maior agilidade na hora de fazer seus reparos." />
    <div class="container">
        <div class="section-title-center">
            <h1>Maior agilidade nos seus reparos</h1>
            <h6>Procurando a peça ideal para reformar seu piso?</h6> <p>Os Tacos de Madeira Recuperada Durevole garantem maior agilidade na hora de fazer seus reparos. Nós selecionamos as melhores peças de madeira nobre, removemos toda a sujeira, pregos e cola que atrapalhavam na hora de sua instalação.</p>
            <p>Não encontrou o tamanho que precisava? Nós fazemos o tamanho personalizado pra você.</p>
            <div class="reparo-botoes">
              <Link to="#reparos"><button class="botao-traco-g">Produtos<img src={IconSeta} class="arrow" /></button></Link>
              <Link to="/oficina/"><button class="botao-traco-g">Peças sob medida<img src={IconSeta} class="arrow" /></button></Link>
              <Link to="/profissionais/"><button class="botao-traco-g">Durevole para Profissionais<img src={IconSeta} class="arrow" /></button></Link>
          </div>
        </div>
        <div class="margem-5p"></div>
        <ProdutosReparos />
    </div>
    <div class="margem-5p"></div>
  </Layout>
)

export default Reparos