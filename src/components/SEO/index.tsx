import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title: string
  description?: string
}

const SEO: FC<SEOProps> = props => {
  const { title, description } = props

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              instagram
            }
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  const titlePage = `${title} | ${site.siteMetadata.title}`

  return (
    <Helmet
      defer={false}
      defaultTitle={titlePage}
      titleTemplate={`%s | ${titlePage}`}
    >
      <html lang="pt-br" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content={metaDescription} />

      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt-br" />
      <meta property="og:title" content={titlePage} />
      <meta property="og:site_name" content={site.siteMetadata.title} />

      <meta name="facebook:card" content="summary" />
      <meta name="facebook:site" content={site.siteMetadata.social.facebook} />
      <meta name="facebook:title" content={titlePage} />
      <meta name="facebook:description" content={metaDescription} />
    </Helmet>
  )
}
export default SEO
