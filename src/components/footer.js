import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"
import logo from '../images/logo-footer.svg'

import IcoSite from '../images/site-protegido.svg'
import PagMaster from '../images/pag-master.svg'
import PagVisa from '../images/pag-visa.svg'
import PagAmerican from '../images/pag-american.svg'
import PagBoleto from '../images/pag-boleto.svg'
import PagMercPago from '../images/pag-mercado-pago.svg'
import SeloFSC from '../images/fsc-selo-branco.svg'
import IcoWhatsapp from '../images/social-whatsapp.svg'

const Footer = () => (
    <footer>
        <div class="chat">
            <div class="chat-text">Fale pelo Whatsapp</div>
            <a href="https://wa.me/5511989050102" target="_blank"><img src={IcoWhatsapp} class="chat-icon" /></a>
        </div>
        <div class="rodape">
            <div class="container">
                <div class="rodape-grid">
                    <div class="rodape-logo">
                        <Link to="/"><img src={logo} /></Link>
                        © 2021 Durevole
                    </div>
                    <div>
                        <p class="destaque-pequeno">Para Casa</p>
                        <ul>
                            <li><Link to="/colecoes/#pisos">Pisos de Madeira</Link></li>
                            <li><Link to="/colecoes/#revestimentos">Revestimentos</Link></li>
                            <li><Link to="/colecoes/#decks">Decks</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p class="destaque-pequeno">Para Profissionais</p>
                        <ul>
                            <li><Link to="/profissionais/">Linha Profissional</Link></li>
                            <li><Link to="/reparos/">Para reparos</Link></li>
                            <li><Link to="/profissionais/#lojas">Lojas Parceiras</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p class="destaque-pequeno">Missão Durevole</p>
                        <ul>
                            <li><Link to="/colheitas/">Colheitas</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="rodape-pagamentos">
                    <div class="rodape-pagamentos-ali">
                        <img src={IcoSite} alt="Durevole é um Site Protegido" />
                    </div>
                    <div class="separador-light"></div>
                    <div class="rodape-pagamentos-ali">
                        <span>Aceitamos as principais bandeiras</span>
                        <div>
                            <img src={PagMaster} />
                            <img src={PagVisa} />
                            <img src={PagAmerican} />
                        </div>
                    </div>
                    <div class="separador-light"></div>
                    <div class="rodape-pagamentos-ali">
                        <span>Pague com Boleto Bancário</span>
                        <img src={PagBoleto} />
                    </div>
                    <div class="separador-light"></div>
                    <div class="rodape-pagamentos-ali">
                        <img src={PagMercPago} />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        <div class="certificacao">
            <div class="container">
                <div class="selo-rodape">
                    <h6> Procure por <br />produtos <br/>certificados FSC®</h6>
                    <img src={SeloFSC} alt="Selo FSC" />
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
