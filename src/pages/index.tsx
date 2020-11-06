import React from 'react'
import { PageProps } from 'gatsby'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'
import PostItem from '~app/components/PostItem'

const Home: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Início" />
    <PostItem
      slug="/about/"
      background="#8AFF80"
      category="Misc"
      date="06 de Novembro de 2020"
      timeToRead="5"
      title="Como fazer um Blog com o framework Gatsby"
      description="Algumas razões para você fazer sua própria plataforma de compartilhamento de conteúdo."
    />
  </Layout>
)

export default Home
