import * as React from "react"
import { graphql, navigate, StaticQuery } from 'gatsby'
import {Link } from "gatsby"
import PropTypes from "prop-types"

export default () => (
    <StaticQuery
        query={graphql`
    query ProdutoQuery {
        allContentfulProdutos(
            limit: 4
            sort: { fields: [createdAt], order: DESC }
            filter: {
                node_locale: {eq: "pt-BR",}
                produtoEmDestaque: {eq: true}
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
        <div class="container">
            <section id="produtos" class="produtos">
                <div class="section-title-center">
                    <h3>Coleções exclusivas e limitadas</h3>
                    <p class="destaque-light">Nós trazemos vida nova a madeiras nobres, antes descartadas.</p>
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
        </div>
    )}
/>
)
