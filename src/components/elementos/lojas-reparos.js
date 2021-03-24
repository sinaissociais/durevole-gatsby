import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"

import RevCasaRaspador from '../../images/logo-casaraspador-branco.svg'

const LojasReparo = () => (
    <div class="produto-lojas">
        <div>
            <h4>Compre nas lojas parceiras dos profissionais de pisos de madeira</h4>
            <p>Procure uma de nossas revendas e faça seu pedido! É só tirar da caixa e começar a instalar.</p>
        </div>
        <div class="w-100">
            <p class="destaque-pequeno cor-loja loja-cidade">São Paulo</p>
            <img src={RevCasaRaspador} alt="Logo São Geraldo" />
            <div class="flex gap-15">
                <div>
                    <a href="https://www.google.com/maps/dir//AJK+Casa+do+Raspador,+Av.+Marqu%C3%AAs+de+S%C3%A3o+Vicente,+420+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01139-000/@-23.5725443,-46.7172308,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x94ce5810f5a365ab:0xdfdb3fdd442e32bc!2m2!1d-46.663745!2d-23.521519" target="_blank"><button class="botao-traco-p b-branco-cor">Visite a loja</button></a>
                </div>
            </div>
        </div>
    </div>
)

export default LojasReparo
