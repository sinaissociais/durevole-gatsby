import React from 'react'
import{ graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import SEO from "../components/seo"

import ColheitaProcessos from '../components/elementos/colheita-processos'
import LojasMin from '../components/elementos/lojas-min'
import LojasReparos from '../components/elementos/lojas-reparos'

import "./produtos.css"

import Icon1 from '../images/icon-taco1.svg'
import Icon2 from '../images/icon-taco2.svg'
import Icon3 from '../images/icon-taco3.svg'
import Icon4 from '../images/icon-taco4.svg'
import Icon5 from '../images/icon-taco5.svg'
import IconSeta from '../images/icon-seta-verde.svg'


const ProdutosTemplate = (props) => {
    return (
        <Layout>
            <SEO title={props.data.contentfulProdutos.nomeDoProduto} />
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
                <a href={`https://wa.me/5511989050102?text=Gostaria%20de%20solicitar%20orçamento%20para%20${props.data.contentfulProdutos.produtoTipoDeProduto.tituloTipoDeProduto}%20Durevole%20cod.%20${props.data.contentfulProdutos.codigoDoProdutoPrograma}%20-%20Coleção%20${props.data.contentfulProdutos.nomeDoProduto}`} target="_blank"><button class="botao-quadrado b-verdeescuro">Solicitar Orçamento</button></a>
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
                        <li class={`${props.data.contentfulProdutos.produtoCertificadoFsc}`} ><img src={Icon5} alt="Ícone FSC" /> <p> FSC Certificada <br /> 100% Reciclada</p></li>
                    </ul>
                    <p class="fonte-descricao">{props.data.contentfulProdutos.produtoDestaquesAviso}</p>
                    <a href={`https://wa.me/5511989050102?text=Gostaria%20de%20solicitar%20orçamento%20para%20${props.data.contentfulProdutos.produtoTipoDeProduto.tituloTipoDeProduto}%20Durevole%20cod.%20${props.data.contentfulProdutos.codigoDoProdutoPrograma}%20-%20Coleção%20${props.data.contentfulProdutos.nomeDoProduto}`} target="_blank"><button class="botao-cumprido espaco-botao">Solicitar Orçamento do Material Instalado</button></a>
                </div>
            </div>
            {/* Fim - Destaques */}  

            {/* Início - Processo e Lojas */}
            <section class="background-verde-escuro">
                <div class="container">
                    <div class="produto-processo-titulo">
                        <div>
                            <h2>Pronto para instalar</h2>
                            <p>Selecionamos e renovamos as melhores peças, que ficam prontas para uma nova instalação.</p>
                        </div>
                    </div>
                    <ColheitaProcessos />
                    <div class={`lojas-design ${props.data.contentfulProdutos.produtoTipoDeProduto.slugTipoDeProduto}`}>
                        <LojasMin />
                    </div>
                    <div class={`lojas-reparos ${props.data.contentfulProdutos.produtoTipoDeProduto.slugTipoDeProduto}`}>
                        <LojasReparos />
                    </div>
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
            produtoCertificadoFsc
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
                slugTipoDeProduto
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