import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProdutosDestaque from "../components/elementos/produtos-destaque"
import ColheitaProcessos from '../components/elementos/colheita-processos'

import IconSeta from '../images/icon-seta-verde.svg'

import ColImagem from '../images/colheitas-imagem.jpg'
import ColMadeira from '../images/colheitas-madeira-velha.jpeg'
import Col01 from '../images/col-img-01.jpeg'
import Col02 from '../images/col-img-02.jpeg'
import Col03 from '../images/col-img-03.png'

const Colheitas = () => (
  <Layout>
    <SEO title="Colheitas" description="A colheita é o primeiro passo para transformar a madeira nobre usada, antes gasta, em um produto Durevole." />
    <div class="container">
        <section class="grid-colheitas">
            <img class="grid-colheitas-image" src={ColImagem} alt="Lâminas Durevole com textura Rústica" />
            <div class="g-colheitas-titulo">
                <h1>
                    Um novo significado
                </h1>
                <p>A colheita é o primeiro passo para transformar a madeira nobre usada, antes gasta, em um produto Durevole.</p>

                <p>Retiramos manualmente e selecionamos as peças com potencial, para garantir o máximo aproveitamento da madeira de reuso, resignificando o seu valor nobre e transformando em um novo produto: natural, belíssimo e durável.</p>
                <Link to="#colheita-processo"><button class="botao-traco-g">Conheça as colheitas <img class="arrow" src={IconSeta} /></button></Link>
            </div>
            <div class="g-colheitas-pedacos">
                <img src={ColMadeira} alt="Parte da história de Brasília" />
            </div>
        </section>
        <section class="colheitas-pedacos">
            <div class="colheitas-images-grid">
                <img src={Col01} alt="" />
                <img src={Col02} alt="" />
                <img src={Col03} alt="" />
            </div>
            <div class="section-title-center">
                <h2>
                    Pedaços da nossa história
                </h2>
                <p class="destaque-pequeno">
                    Em algumas das casas ou apartamentos onde extraímos as madeiras, estão verdadeiras memórias da construção e fundação da nova capital do país, Brasília. Uma época onde madeiras extremamente duráveis como a Peroba Rosa e o Ipê eram usadas como pisos de madeira.
                </p>
            </div>
        </section>
        <section>
            <ColheitaProcessos />
        </section>
    </div>
    <ProdutosDestaque />
    <div class="margem-5p"></div>
  </Layout>
)

export default Colheitas
