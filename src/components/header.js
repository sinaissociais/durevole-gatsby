import * as React from "react"
import {Link } from "gatsby"
import PropTypes from "prop-types"
import logo from '../images/logo-verde.svg'

import iconchat from '../images/icon-chat-verde.svg'
import iconinsta from '../images/icon-instagram-verde.svg'

function mudaClass() {
  var menuBtn = document.querySelector('.menu-navegacao-mobile-btn');
  var menuItems = document.querySelector('.menu-navegacao');
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

const Header = ({ siteTitle }) => (
  // Começo do Header
    <header class="cabecalho-verde">
       <div class="container header">
           {/* Logo */}
           <Link to="/" class="logo flex"><img src={logo} alt="Logo da Durevole" /></Link>
           {/* Começo do Menu */}
           <nav class="main-menu">
               <ul class="menu-navegacao">
                   <li><Link to="/colecoes/" activeClassName="ativa">Coleções</Link></li>
                   <li><Link to="/oficina/" activeClassName="ativa">Oficina</Link></li>
                   <li><Link to="/reparos/" activeClassName="ativa">Para Reparos</Link></li>
                   <li><Link to="/colheitas/" activeClassName="ativa">Colheitas</Link></li>
                   <li><Link to="/quem-somos/" activeClassName="ativa">Quem Somos</Link></li>
                   <Link to="/onde-comprar/"><button class="botao-redondo">Onde Comprar</button></Link>
               </ul>
           </nav>
           {/* Menu de Navegação Mobile */}
           <div class="menu-navegacao-mobile-btn" onClick={() => {mudaClass()}}>
             <div class="menu-navegacao-mobile-btn_burger"></div>
           </div>
           <div class="botao-atendimento">
             <a href="https://wa.me/5511989050102" target="_blank">
                  <img src={iconchat} alt="Icone de Chat" />
             </a>
             <a href="https://instagram.com/durevoleoficial" target="_blank">
                  <img src={iconinsta} alt="Icone Instagram Durevole" />
             </a>
           </div>
       </div>
    </header>
  // Fim do Header
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
