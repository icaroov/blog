import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'

const Home: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Início" />
    <p>Home</p>
  </Layout>
)

export default Home
