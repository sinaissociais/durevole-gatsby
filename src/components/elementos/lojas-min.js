import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"

import RevSaoGeraldo from '../../images/logo-saogeraldo-branco.svg'
import RevMosarte from '../../images/logo-mosarte-branco.svg'

const LojasMin = () => (
    <div class="produto-lojas">
        <div>
            <h4>Saiba onde comprar madeira recuperada e certificada FSC®</h4>
            <p>Você encontra nas lojas que são referência em design de alto padrão em todo o país.</p>
        </div>
        <div class="w-100">
            <p class="destaque-pequeno cor-loja loja-cidade">Brasília - DF</p>
            <img src={RevSaoGeraldo} alt="Logo São Geraldo" />
            <div class="flex gap-15">
                <div>
                    <a href="https://www.google.com/maps/dir//Sao+Geraldo+brasilia/@-15.8035257,-47.9936307,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a31a9a21b536b:0x740453c11c83f00e!2m2!1d-47.9586111!2d-15.8036111" target="_blank"><button class="botao-traco-p b-branco-cor">Visite a loja</button></a>
                </div>
            </div>
        </div>
        <div class="w-100">
            <p class="destaque-pequeno cor-loja loja-cidade">São Paulo - SP</p>
            <img src={RevMosarte} alt="Logo Mosarte" />
            <div class="flex gap-15">
                <div>
                     <a href="https://www.google.com/maps/dir//Mosarte+%26+Co.+%7C+Concept+-+Alameda+Gabriel+Monteiro+da+Silva+-+Jardim+America,+S%C3%A3o+Paulo+-+SP/@-23.5725443,-46.7172308,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce577219a7eb8b:0x2a83f949666a0782!2m2!1d-46.6822112!2d-23.5726269" target="_blank"><button class="botao-traco-p b-branco-cor">Visite a loja</button></a>
                </div>
            </div>
        </div>
    </div>
)

export default LojasMin
