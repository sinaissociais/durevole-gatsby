import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GridDestaque from "../components/elementos/grid-destaque"
import ProdutosDestaque from "../components/elementos/produtos-destaque"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GridDestaque />
    <ProdutosDestaque />
    <h1>Amor</h1>
    <p>Sinais to your new Leg filho da puta! site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
