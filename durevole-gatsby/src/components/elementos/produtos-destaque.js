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
        }
        ) {
        edges {
            node {
                id
                nomeDoProduto
                slugDoProduto
                descricaoDoProduto {
                    descricaoDoProduto
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
            <section id="produtos">
                <div class="section-title-center">
                    <h3>Coleções exclusivas e limitadas</h3>
                    <p class="destaque-light">Nós trazemos vida nova a madeiras nobres, antes descartadas.</p>
                </div>
                <div class="content-boxes">
                    {data.allContentfulProdutos.edges.map(edge => (
                        <Link to={(`/produtos/${edge.node.slugDoProduto}`)} class="produto-box">
                            <img src={edge.node.produtoImagem.fluid.src} alt={edge.node.nomeDoProduto} />
                            <h4 class="produto-titulo">{edge.node.nomeDoProduto}</h4>
                            <span class="produto-descricao">{edge.node.descricaoDoProduto.descricaoDoProduto}</span>
                            <div class="produto-tag">{edge.node.categoriaDoProduto}</div>
                        </Link>
                    ))}
                </div>
                <div class="section-title-center">
                    Extraímos tacos, assoalhos e tábuas em casas e apartamentos antigos, que possuem anos de instalação - geralmente são das décadas de 60 e 70 - e após um processo rigoroso de seleção, fazemos a recuperação dessas réguas de madeira.
                </div>
            </section>
        </div>
    )}
/>
)
