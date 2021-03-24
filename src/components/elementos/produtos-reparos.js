import * as React from "react"
import { graphql, navigate, StaticQuery } from 'gatsby'
import {Link } from "gatsby"
import PropTypes from "prop-types"

export default () => (
    <StaticQuery
        query={graphql`
    query ProdutoQueryReparos {
        allContentfulProdutos(
            limit: 8
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "pt-BR",}
                produtoTipoDeProduto: {slugTipoDeProduto: {eq: "reparos"}}
        }
        ) {
        edges {
            node {
                id
                nomeDoProduto
                slugDoProduto
                produtoEspecieMadeira
                descricaoDoProduto {
                    descricaoDoProduto
                }
                produtoCategoriaDeProduto {
                    tituloCategoriaDeProduto
                }
                produtoImagem {
                    fluid(maxWidth: 1200, quality: 100) {
                        ...GatsbyContentfulFluid
                        src
                    }
                }
            }
        }
    }
}
`}

    render={data => (
        <section id="reparos" class="produtos">
            <div class="produto-categoria">
                <h5>Produtos para Reparos</h5>
                <div class="separador-line-produto"></div>
            </div>
            <div class="content-boxes">
                {data.allContentfulProdutos.edges.map(edge => (
                    <Link to={(`/produtos/${edge.node.slugDoProduto}`)} class="produto-box">
                        <img src={edge.node.produtoImagem.fluid.src} alt={edge.node.nomeDoProduto} />
                        <h4 class="produto-titulo">{edge.node.nomeDoProduto}</h4>
                        <span class="produto-descricao">{edge.node.produtoCategoriaDeProduto.tituloCategoriaDeProduto}</span>
                        <div class="produto-tag">{edge.node.produtoEspecieMadeira}</div>
                    </Link>
                ))}
            </div>
        </section>
    )}
/>
)
