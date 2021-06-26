require("dotenv").config()

const isProduction = process.env.NODE_ENV === `production`

module.exports = {
  siteMetadata: {
    title: `Ceiphr`,
    author: {
      name: `Ari Birnbaum`,
      summary: `, a student and technical writer studying at Stevens Institute of Technology.`
    },
    description: `Technical articles written by Ari Birnbaum pertaining to 
    Django, Python, Node.js, Gatsby.js, TypeScript, GraphQL, and DevOps.`,
    siteUrl: `https://www.ceiphr.com/`,
    social: {
      twitter: `ceiphr`,
      github: `ceiphr`
    }
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /static/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-simple-analytics`,
      options: {
        domain: `sa.ceiphr.com`,
        trackPageViews: isProduction
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "±",
              prompt: {
                user: "ari",
                host: "localhost",
                global: true
              }
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: {unlisted: {ne: true}, redirect: {eq: null}}}
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ceiphr`,
        short_name: `Ceiphr`,
        start_url: `/`,
        background_color: `#111827`,
        theme_color: `#111827`,
        display: `minimal-ui`,
        include_favicon: false,
        icon: `src/images/ari.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `async`,
        enableListener: true,
        preconnect: [`https://use.typekit.net`],
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: [`Fira Code`, `Fira Code VF`],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: `/fonts/fira_code/fira_code.css`
          }
        ],
        web: [
          {
            name: `roboto`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`
          },
          {
            name: `neue-haas-grotesk-display`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`
          }
        ]
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: isProduction && process.env.SENTRY_DSN,
        ignoreErrors: ["ChunkLoadError"]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [
          `/how-to-display-data-from-the-digitalocean-api-with-django/`,
          `/how-to-harden-your-production-django-project/`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-vercel",
      options: {
        // (optional) Prints metrics in the console when true
        debug: !isProduction
      }
    }
  ]
}
