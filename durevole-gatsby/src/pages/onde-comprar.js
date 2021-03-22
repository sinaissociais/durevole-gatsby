import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LogoSaoGeraldo from '../images/logo-saogeraldo.svg'
import LogoMosarte from '../images/logo-mosarte.svg'

import LaminaDurevole from '../images/lamina-durevole.jpeg'
import Brasilia from '../images/brasilia.png'
import InfoImgTecnologia from '../images/foto-tecnologia.jpeg'

const QuemSomos = () => (
  <Layout>
    <SEO title="Quem Somos" />
    <div class="container">
        <section class="onde-destaque">
            <h1>Onde comprar madeira Durevole</h1>
            <p>Extraímos tacos, assoalhos e tábuas em casas e apartamentos antigos, que possuem anos de instalação - geralmente são das décadas de 60 e 70 - e após um processo rigoroso de seleção, fazemos a recuperação dessas réguas de madeira.</p>
        </section>
        <section class="section-title-center">
            <h3>Compre nas lojas</h3>
            <p class="destaque-light">Estamos em lojas que são referências nacionais em design de alto padrão.</p>
            <p>Atendimento exclusivo para orçamentos com instalação e consultoria especializada no projeto. A equipe conta com instaladores especialistas e acompanhamento constante em obras.</p>
        </section>
        <section class="flex loja-box">
            <div class="w-100">
                <p class="destaque-pequeno cor-loja loja-cidade">Brasília - DF</p>
                <img src={LogoSaoGeraldo} />
                <div class="flex gap-15">
                    <div>
                        <p>São Geraldo - Lago Sul <br />
                            QI 5 do Lago Sul <br />
                            (61) 99506-5542</p>
                        <button class="botao-traco-p b-cinza-cor">Visite a loja</button>
                    </div>
                    <div>
                        <p>São Geraldo - S.I.A <br />
                            S.I.A Trecho 03, Nº 790 <br />
                            (61) 99506-5542</p>
                        <button class="botao-traco-p b-cinza-cor">Visite a loja</button>
                    </div>
                </div>
            </div>
            <div class="w-100">
                <p class="destaque-pequeno cor-loja loja-cidade">São Paulo - SP</p>
                <img src={LogoMosarte} alt="Logo Mosarte" />
                <div class="flex gap-15">
                    <div>
                        <p>Mosarte & Co. - Concept <br />
                            Alameda Gabriel Monteiro <br /> da Silva, 1556 -Jardins <br />
                            (11) 3081-2826</p>
                        <button class="botao-traco-p b-cinza-cor">Visite a loja</button>
                    </div>
                    <div>
                        <p>Mosarte & Co. - D&D <br />
                            Av. das Nações Unidas, <br /> 12555, Itaim Bibi <br />
                            (11) 4195-0031</p>
                        <button class="botao-traco-p b-cinza-cor">Visite a loja</button>
                    </div>
                </div>
            </div>
        </section> 
    </div>
    <div class="margem-15p"></div>
  </Layout>
)

export default QuemSomos
