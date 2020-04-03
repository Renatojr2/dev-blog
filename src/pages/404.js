import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <p>Ops... deu ruim. Não encontramos a pagina que você procura, 
      tem certeza que digitou certo.
    </p>
  </Layout>
)

export default NotFoundPage
