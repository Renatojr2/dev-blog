import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/seo"

import {Header} from '../../src/components/About/styles'

const AboutPage = ()=> (
  <Layout>
    <SEO title='About' />
    <Header>
      <h1>Sobre o autor</h1>
    </Header>
  </Layout>
);

export default AboutPage;