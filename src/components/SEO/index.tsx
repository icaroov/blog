import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title: string
  description?: string
  image?: string
  url: string
}

const SEO: FC<SEOProps> = props => {
  const { title, description, image, url } = props

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
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
  const siteUrl = url || site.siteMetadata.siteUrl
  const ogImage = `${siteUrl}${image || '../../../static/assets/logo.png'}`

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
      <meta property="og:image" content={ogImage} />

      <meta name="facebook:card" content="summary" />
      <meta name="facebook:site" content={site.siteMetadata.social.facebook} />
      <meta name="facebook:title" content={titlePage} />
      <meta name="facebook:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={ogImage} />
    </Helmet>
  )
}
export default SEO
