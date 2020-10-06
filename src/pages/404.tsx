import React, { useEffect } from 'react'
import { PageProps, navigate } from 'gatsby'
import SEO from '~app/components/SEO'

const NotFound: React.FC<PageProps> = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return (
    <>
      <SEO title="Página não encontrada" description="Página não encontrada" />
      <h1>Ops... Página não encontrada.</h1>
    </>
  )
}

export default NotFound
