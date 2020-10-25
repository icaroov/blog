import React, { useEffect } from 'react'
import { PageProps, navigate } from 'gatsby'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'

const NotFound: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Página não encontrada" description="Página não encontrada" />
      <h1>Ops... Página não encontrada.</h1>
    </Layout>
  )
}

export default NotFound
