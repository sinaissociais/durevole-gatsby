import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"

import IconPlay from '../../images/icon-play.svg'
import Processo1 from '../../images/content/1-colheita.jpg'
import Processo2 from '../../images/content/2-triagem.jpg'
import Processo3 from '../../images/content/3-limpeza.jpg'
import Processo4 from '../../images/content/4-nacaixa.jpg'

const ColheitaProcessos = () => (
    <div id="colheita-processo" class="produto-processo">
        <div class="content-boxes">
            <div class="content-box">
                <div class="content-box-img-title">
                    <h5>1. Colheita</h5>
                    <img src={Processo1} alt="" />
                </div>
                <div class="content-box-desc">
                    <p>Retiramos as madeiras no ambiente de obra, com todo o cuidado para preservar a integridade das peças.</p>
                    <button class="botao-play-video">Veja o vídeo
                        <img src={IconPlay} alt="Botão Play" />
                    </button>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box-img-title">
                    <h5>2. Triagem</h5>
                    <img src={Processo2} alt="Colheita de madeira para recuperação" />
                </div>
                <div class="content-box-desc">
                    <p>Selecionamos as melhores madeiras e definimos o tipo de produto que aquela peça é mais indicada.</p>
                    <button class="botao-play-video">Veja o vídeo
                        <img src={IconPlay} alt="Botão Play" />
                    </button>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box-img-title">
                    <h5>3. Limpeza</h5>
                    <img src={Processo3} alt="" />
                </div>
                <div class="content-box-desc">
                    <p>Removemos manualmente os pregos presentes no taco, e com uma máquina específica, removemos o acabamento e as sujeiras das faces</p>
                    <button class="botao-play-video">Veja o vídeo
                        <img src={IconPlay} alt="Botão Play" />
                    </button>
                </div>
            </div>
            <div class="content-box">
                <div class="content-box-img-title">
                    <h5>4. Na Caixa</h5>
                    <img src={Processo4} alt="" />
                </div>
                <div class="content-box-desc">
                    <p>Por fim, o produto é limpo e embalado em caixas, pronto para entregar na sua obra.</p>
                    <button class="botao-play-video">Veja o vídeo
                        <img src={IconPlay} alt="Botão Play" />
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default ColheitaProcessos
