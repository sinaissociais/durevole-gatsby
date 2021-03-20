import React from 'react'
import{ graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout'

import "./produtos.css"

import Icon1 from '../images/icon-taco1.svg'
import Icon2 from '../images/icon-taco2.svg'
import Icon3 from '../images/icon-taco3.svg'
import Icon4 from '../images/icon-taco4.svg'
import Icon5 from '../images/icon-taco5.svg'
import IconSeta from '../images/icon-seta-verde.svg'
import IconPlay from '../images/icon-play.svg'
import RevSaoGeraldo from '../images/logo-saogeraldo-branco.svg'
import RevMosarte from '../images/logo-mosarte-branco.svg'
import Processo1 from '../images/content/1-colheita.png'
import Processo2 from '../images/content/2-triagem.png'
import Processo3 from '../images/content/3-limpeza.png'
import Processo4 from '../images/content/4-nacaixa.png'


const ProdutosTemplate = (props) => {
    return (
        <Layout>
            {/* Início - Topo Produto */}
            <div class="container produto-topo">
                <ul class="produto-sidebar">
                    <li>
                        <b>Código</b>
                        {props.data.contentfulProdutos.codigoDoProdutoPrograma}
                    </li>
                    <li>
                        <b>Categoria</b>
                        {props.data.contentfulProdutos.produtoCategoriaDeProduto.tituloCategoriaDeProduto}
                    </li>
                    <li>
                        <b>Espécie</b>
                        {props.data.contentfulProdutos.produtoEspecieMadeira}
                    </li>
                    <li>
                        <b>Espessura</b>
                        {props.data.contentfulProdutos.produtoEspessura}
                    </li>
                </ul>
                <img src={props.data.contentfulProdutos.produtoImagem.fluid.src} class="produto-imagem" />
                <div class="produto-descricao">
                    <div class="produto-descricao-tipo">
                        {props.data.contentfulProdutos.produtoTipoDeProduto.tituloTipoDeProduto}
                    </div>
                    <h1>
                        {props.data.contentfulProdutos.nomeDoProduto}
                    </h1>
                    <p>
                        {props.data.contentfulProdutos.descricaoDoProduto.descricaoDoProduto}
                    </p>
                </div>
                <div class="produto-detalhes">
                    <div class="produto-detalhes-item">
                        {props.data.contentfulProdutos.produtoUso}
                    </div>
                    <div class="produto-detalhes-item">
                        Tamanhos <br />
                        <span>{props.data.contentfulProdutos.produtoTamanhos}</span>
                    </div>
                    <div class="produto-detalhes-item">
                        Quantidade na Caixa <br />
                        <span>{props.data.contentfulProdutos.produtoQuantidadeNaCaixa}</span>
                    </div>
                </div>
                <div class="produto-botoes">
                    <button class="botao-quadrado b-verdeescuro">Comprar</button>
                </div>
            </div>
            {/* Fim - Topo Produto */}

            {/* Início - Imagem Destaque */}
            <img class="imagem-destaque" src={props.data.contentfulProdutos.produtoImagemDestaque.fluid.src} />
            {/* Fim - Imagem Destaque */}

            {/* Início - Destaques */}
            <div class="container tesouro-centro">
                <div>
                    <h2 class="cor-tec">{props.data.contentfulProdutos.produtoDestaquesTitulo}</h2>
                    <p>{props.data.contentfulProdutos.produtoDestaquesDescricao}</p>
                    <img src={props.data.contentfulProdutos.produtoDestaquesImagem.fluid.src} alt="Taco Durevole" />
                </div>
                <div>
                    <ul class="lista-flex">
                        <li><img src={Icon1} alt="Detalhe taco Durevole" /> <p>Composição <br /><b>{props.data.contentfulProdutos.produtoDestaquesComposicao}</b> </p></li>
                        <li><img src={Icon2} alt="Detalhe taco Durevole" /> <p>Espessura de <br />{props.data.contentfulProdutos.produtoDestaquesEspessura}</p></li>
                        <li><img src={Icon3} alt="Detalhe taco Durevole" /> <p>Encaixe <br /> <b>{props.data.contentfulProdutos.produtoDestaquesEncaixe}</b></p></li>
                        <li><img src={Icon4} alt="Embalagem dos tacos Durevole" /> <p>Peso da Caixa<br /> <b>{props.data.contentfulProdutos.produtoDestaquesPesoCaixa}</b></p></li>
                        <li><img src={Icon5} alt="Ícone FSC" /> <p> FSC Certificada <br /> 100% Reciclada</p></li>
                    </ul>
                    <p class="fonte-descricao">{props.data.contentfulProdutos.produtoDestaquesAviso}</p>
                    <button class="botao-cumprido espaco-botao">Solicitar Orçamento do Material Instalado <img src={IconSeta} /></button>
                </div>
            </div>
            {/* Fim - Destaques */}  

            {/* Início - Processo e Lojas */}
            <section class="background-verde-escuro">
                <div class="container">
                    {/* Início - Processo */}
                    <div class="produto-processo">
                        <div class="produto-processo-titulo">
                            <div>
                                <h2>Pronto para instalar</h2>
                                <p>Selecionamos e renovamos as melhores peças, que ficam prontas para uma nova instalação.</p>
                            </div>
                        </div>
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
                    {/* Fim - Processo */}

                    {/* Início - Lojas */}
                    <div class="produto-lojas">
                        <div>
                            <h4>Saiba onde comprar madeira reciclada e certificada FSC</h4>
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
                    {/* Fim - Lojas */}
                </div>
            </section>
            {/* Fim - Processo e Lojas */} 
        </Layout>
    )
}

export default ProdutosTemplate;

export const query = graphql`
    query ProdutosTemplate($id: String!) {
        contentfulProdutos(id: {eq: $id}) {
            id
            nomeDoProduto
            codigoDoProdutoPrograma
            descricaoDoProduto {
                descricaoDoProduto
            }
            produtoCategoriaDeProduto {
                id
                tituloCategoriaDeProduto
            }
            produtoTipoDeProduto {
                id
                tituloTipoDeProduto
            }
            produtoEspecieMadeira
            produtoEspessura
            produtoImagem {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            produtoUso
            produtoTamanhos
            produtoQuantidadeNaCaixa
            produtoImagemDestaque {
                fluid {
                  src
                }
            }
            produtoDestaquesTitulo
            produtoDestaquesEspessura
            produtoDestaquesDescricao
            produtoDestaquesComposicao
            produtoDestaquesEncaixe
            produtoDestaquesPesoCaixa
            produtoDestaquesAviso
            produtoDestaquesImagem {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
        }
    }
`