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

const OndeComprar = () => (
  <Layout>
    <SEO title="Onde Comprar" />
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
                            <a href="https://www.google.com/maps/dir//Setor+de+Habita%C3%A7%C3%B5es+Individuais+Sul+QI+5+S%C3%A3o+Geraldo+Lago+-+Lago+Sul,+Bras%C3%ADlia+-+DF/@-15.8515189,-47.9378205,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a25d25da904fd:0x2fb083c3d1313ba2!2m2!1d-47.9028009!2d-15.8515217" target="_blank"><button class="botao-traco-p b-cinza-cor">Visite a loja</button></a>
                    </div>
                    <div>
                        <p>São Geraldo - S.I.A <br />
                            S.I.A Trecho 03, Nº 790 <br />
                            (61) 99506-5542</p>
                            <a href="https://www.google.com/maps/dir//Sao+Geraldo+brasilia/@-15.8035257,-47.9936307,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a31a9a21b536b:0x740453c11c83f00e!2m2!1d-47.9586111!2d-15.8036111" target="_blank"><button class="botao-traco-p b-cinza-cor">Visite a loja</button></a>
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
                            <a href="https://www.google.com/maps/dir//Mosarte+%26+Co.+%7C+Concept+-+Alameda+Gabriel+Monteiro+da+Silva+-+Jardim+America,+S%C3%A3o+Paulo+-+SP/@-23.572623,-46.7172307,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce577219a7eb8b:0x2a83f949666a0782!2m2!1d-46.6822112!2d-23.5726269" target="_blank"><button class="botao-traco-p b-cinza-cor">Visite a loja</button></a>
                    </div>
                    <div>
                        <p>Mosarte & Co. - D&D <br />
                            Av. das Nações Unidas, <br /> 12555, Itaim Bibi <br />
                            (11) 4195-0031</p>
                            <a href="https://www.google.com/maps/dir//D%26D+Shopping+-+Avenida+das+Na%C3%A7%C3%B5es+Unidas+-+Cidade+Mon%C3%A7%C3%B5es,+S%C3%A3o+Paulo+-+SP/@-23.6089817,-46.7316431,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce50cce8d95555:0x83c7804d0b1512da!2m2!1d-46.6966236!2d-23.6089856" target="_blank"><button class="botao-traco-p b-cinza-cor">Visite a loja</button></a>
                    </div>
                </div>
            </div>
        </section> 
    </div>
    <div class="margem-15p"></div>
  </Layout>
)

export default OndeComprar
