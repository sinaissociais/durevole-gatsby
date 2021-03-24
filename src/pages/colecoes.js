import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProdutosPisos from "../components/elementos/produtos-pisos"
import ProdutosRevestimentos from "../components/elementos/produtos-revestimentos"
import ProdutosDecks from "../components/elementos/produtos-decks"

const Colecoes = () => (
  <Layout>
    <SEO title="Coleções Exclusivas e Limitadas" description="Conheça as Coleções de madeiras nobres recuperadas. Extraímos tacos, assoalhos e tábuas em casas e apartamentos antigos, que possuem anos de instalação - geralmente são das décadas de 60 e 70 - e após um processo rigoroso de seleção, fazemos a recuperação dessas réguas de madeira." />
    <div class="container">
        <div class="section-title-center">
            <h1>Coleções Exclusivas e Limitadas</h1>
            <p>Extraímos tacos, assoalhos e tábuas em casas e apartamentos antigos, que possuem anos de instalação - geralmente são das décadas de 60 e 70 - e após um processo rigoroso de seleção, fazemos a recuperação dessas réguas de madeira.</p>
        </div>
        <div class="colecoes-menu-tipos">
            <Link to="#pisos">
                <div class="colecoes-menu-tipos-item">
                    <div class="colecoes-point"></div>
                    <h5>Pisos de Madeira</h5>
                    <span>Ver coleções</span>
                </div>
            </Link>
            <Link to="#revestimentos">
                <div class="colecoes-menu-tipos-item">
                    <div class="colecoes-point"></div>
                    <h5>Revestimentos</h5>
                    <span>Ver coleções</span>
                </div>
            </Link>
            <Link to="#decks">
                <div class="colecoes-menu-tipos-item">
                    <div class="colecoes-point"></div>
                    <h5>Decks</h5>
                    <span>Ver coleções</span>
                </div>
            </Link>
        </div>
        <div class="margem-5p"></div>
        <ProdutosPisos />
        <div class="margem-5p"></div>
        <ProdutosRevestimentos />
        <div class="margem-5p"></div>
        <ProdutosDecks />
    </div>
    <div class="margem-5p"></div>
  </Layout>
)

export default Colecoes