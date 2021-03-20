import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"

import IconSeta from '../../images/icon-seta-verde.svg'

import LaminaDurevole from '../../images/lamina-durevole.jpeg'
import Brasilia from '../../images/brasilia.png'

const GridDestaque = () => (
    <div class="container">
        <section class="grid-multi">
            <img class="grid-image" src={LaminaDurevole} alt="Lâminas Durevole com textura Rústica" />
            <div class="g-titulo">
                <h2>
                    Diferente de qualquer outra
                </h2>
                <h5 class="g-descricao">
                    Nós trazemos vida nova a madeiras nobres, antes descartadas.
                </h5>
            </div>
            <div class="g-texto-1">
                <p class="destaque-pequeno">Todo produto Durevole é desenvolvido tendo como matéria-prima madeiras provenientes de demolição</p>
                <button class="botao-traco-g">Conheça as colheitas <img class="arrow" src={IconSeta} /></button>
            </div>
            <div class="g-texto-2">
                Extraímos tacos, assoalhos e tábuas em casas e apartamentos antigos, que possuem anos de instalação - geralmente são das décadas de 60 e 70 - e após um processo rigoroso de seleção, fazemos a recuperação dessas réguas de madeira.
            </div>
            <div class="g-pedacos">
                <p>Pedaços da nossa história</p>
                <img src={Brasilia} alt="Parte da história de Brasília" />
            </div>
        </section>
    </div>
)

export default GridDestaque
