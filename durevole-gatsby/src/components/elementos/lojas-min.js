import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"

import RevSaoGeraldo from '../../images/logo-saogeraldo-branco.svg'
import RevMosarte from '../../images/logo-mosarte-branco.svg'

const LojasMin = () => (
    <div class="produto-lojas">
        <div>
            <h4>Saiba onde comprar madeira recuperada e certificada FSC</h4>
            <p>Você encontra nas lojas que são referência em design de alto padrão em todo o país.</p>
        </div>
        <div class="w-100">
            <p class="destaque-pequeno cor-loja loja-cidade">Brasília - DF</p>
            <img src={RevSaoGeraldo} alt="Logo São Geraldo" />
            <div class="flex gap-15">
                <div>
                    <button class="botao-traco-p b-branco-cor">Visite a loja</button>
                </div>
            </div>
        </div>
        <div class="w-100">
            <p class="destaque-pequeno cor-loja loja-cidade">São Paulo - SP</p>
            <img src={RevMosarte} alt="Logo Mosarte" />
            <div class="flex gap-15">
                <div>
                    <button class="botao-traco-p b-branco-cor">Visite a loja</button>
                </div>
            </div>
        </div>
    </div>
)

export default LojasMin
