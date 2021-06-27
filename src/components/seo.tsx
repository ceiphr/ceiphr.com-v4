/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { useMediaPredicate } from "react-media-hook"

type DataProps = {
  description?: string
  lang?: string
  meta?: any[]
  title: string
}

const Seo: React.FC<DataProps> = ({ description = ``, lang = `en`, meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    social {
                        twitter
                    }
                    author {
                        name
                    }
                }
            }
        }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const favicon = useMediaPredicate("(prefers-color-scheme: dark)")
    ? "/favicon-white.png"
    : "/favicon-black.png"

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={title !== (site.siteMetadata.author.name || ``) ? `%s | ${defaultTitle}` : `%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter || ``
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
      link={[
        {
          "rel": "icon",
          "sizes": "32x32",
          "type": "image/png",
          "href": favicon
        }
      ]}
    />
  )
}

export default Seo
