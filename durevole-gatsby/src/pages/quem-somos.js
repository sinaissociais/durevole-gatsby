import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from '../images/logo-verde.svg'
import SeloFSC from '../images/fsc-selo-cinza.svg'

import LaminaDurevole from '../images/lamina-durevole.jpeg'
import Brasilia from '../images/brasilia.png'
import InfoImgTecnologia from '../images/foto-tecnologia.jpeg'

const QuemSomos = () => (
  <Layout>
    <SEO title="Quem Somos" />
    <div class="container">
        <section class="quem-destaque">
            <h1>Somos uma startup de Brasília que trabalha com madeira reutilizada</h1>
            <p>A Durevole nasceu buscando inovação e contando com a tecnologia como uma grande aliada na redução do desperdício da madeira.</p>
        </section>
        <section class="section-title-center">
            <h4>Sabia que a madeira é um dos poucos materiais 100% recicláveis na construção?</h4>
            <p>E após anos presenciando muitas reformas, nós percebemos que esse material nobre estava indo diretamente para caçambas de lixo.
            Dessa percepção e com a vontade de mudar esse cenário, nasce a Durevole.</p>
        </section>
        {/* Logo Durevole */}
        <div class="quem-logo-meio-pagina"><img src={Logo} alt="Marca da Durevole - Madeiras Recuperadas" /></div>
        {/* Grid Content */}
        <section>
            <div class="container grid-multi">
                <img class="grid-image" src={LaminaDurevole} alt="Lâminas Durevole com textura Rústica" />
                <div class="g-titulo">
                    <h2>
                        As novas florestas
                    </h2>
                    <h5 class="g-descricao">
                        Durevole é uma palavra italiana, que significa durável. E o durável ultrapassa gerações.
                    </h5>
                </div>
                <div class="g-texto-1">
                    <p class="destaque-pequeno">Todo produto Durevole é desenvolvido tendo como matéria-prima madeiras provenientes de demolição.
            Nós trazemos vida nova a madeiras nobres, antes descartadas.</p>
                </div>
                <div class="g-texto-2">
                    Extraímos tacos, assoalhos e tábuas em casas e apartamentos antigos, que possuem anos de instalação - geralmente são das décadas de 60 e 70 - e após um processo rigoroso de seleção, fazemos a recuperação dessas réguas de madeira.
                </div>
                <div class="g-pedacos">
                    <p>Pedaços da nossa história</p>
                    <img src={Brasilia} alt="Parte da história de Brasília" />
                </div>
            </div>
        </section>
        {/* Info Box */}
        <div class="info-box">
            <div class="info-espacos">
                <h2 class="cor-tec">Tecnologia</h2>
                <p>Desenvolvemos máquinas específicas e inovadoras técnicas de desdobro, plaina e classificação de madeira que permitiram nascer um produto inovador e ecologicamente consciente: uma lâmina leve, prática e durável, vendidas em caixas fechadas e classificadas.</p>
            </div>
            <div class="photo">
                <img class="tec-img" src={InfoImgTecnologia} alt="Foto lâmina de madeira" />
            </div>
        </div>
        {/* Logo FSC */}
        <div class="quem-fsc">
            <h5>Somos a única empresa no Brasil que vende madeira de demolição neste formato e com a certificação internacional FSC 100% Material Reciclado</h5>
            <img src={SeloFSC} alt="" />
        </div>
    </div>
  </Layout>
)

export default QuemSomos
