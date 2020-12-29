import React, { useEffect } from 'react'
import { PageProps, navigate } from 'gatsby'
import styled from 'styled-components'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'

const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
`

const NotFound: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <Layout>
      <SEO title="Página não encontrada" description="Página não encontrada" />
      <Text>Ops... Página não encontrada. 😪</Text>
    </Layout>
  )
}

export default NotFound
