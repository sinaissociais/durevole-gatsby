/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

// Implement Gatsby API
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    
    // Produtos

    const getProduto = makeRequest(graphql, `
    {
        allContentfulProdutos (
            sort: { fields: [createdAt], order:DESC }
            filter: {
                node_locale: {eq: "pt-BR"}
            },
            )
        {
            edges {
                node {
                    id
                    slugDoProduto
                }
            }
        }
    }
    `).then(result => {
        result.data.allContentfulProdutos.edges.forEach(({ node }) => {
            createPage({
                path: `produtos/${node.slugDoProduto}`,
                component: path.resolve(`src/templates/produtos.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    return Promise.all([
        getProduto
    ])
};