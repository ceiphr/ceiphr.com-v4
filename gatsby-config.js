require("dotenv").config()

const isProduction = process.env.NODE_ENV === `production`

module.exports = {
  siteMetadata: {
    title: `Ceiphr`,
    author: {
      name: `Ari Birnbaum`,
      summary: `, a student and technical writer studying at Stevens Institute of Technology.`,
    },
    description: `Technical articles and other stuff from Ari Birnbaum. I mainly write about web development and Django. But, I may also write about Linux.`,
    siteUrl: `https://ceiphr.com/`,
    social: {
      twitter: `ceiphr`,
      github: `ceiphr`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false,
        directives: {
          "connect-src": "'self' *.sentry.io *.vercel-analytics.com",
          "script-src":
            "'self' 'sha256-9EfSE/pxhsIRQAZ9nHpzZGKeEticJtki6BUxpyJY/VQ=' *.ceiphr.com *.sentry.io player.vimeo.com giscus.app cdnjs.cloudflare.com *.carbonads.com *.carbonads.net",
          "style-src": "'self' 'unsafe-inline' *.typekit.net",
          "img-src": "'self' data: *.ceiphr.com *.buysellads.net",
          "font-src": "'self' *.typekit.net",
          "manifest-src": "'self'",
          "frame-src":
            "'self' giscus.app codepen.io *.youtube.com *.youtube-nocookie.com *.vimeo.com",
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-simple-analytics`,
      options: {
        domain: `sa.ceiphr.com`,
        trackPageViews: isProduction,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg fill="#909090" viewBox="0 0 24 24" width="18px" height="18px"><path d="M 12 2 A 3 3 0 0 0 9 5 A 3 3 0 0 0 11 7.8242188 L 11 10 L 11 11 L 9 11 L 9 13 L 11 13 L 11 17.927734 C 9.670923 17.772956 8.4903116 17.334634 7.6308594 16.720703 C 6.7329391 16.079293 6.1994731 15.304413 6.0488281 14.480469 L 7.5351562 13.744141 L 3.5234375 11.951172 L 2.4648438 16.255859 L 4.2207031 15.386719 C 4.590567 16.564635 5.4059937 17.590453 6.46875 18.349609 C 7.6980591 19.22774 9.268424 19.79043 11 19.949219 L 11 20 L 12 21 L 13 20 L 13 19.949219 C 14.731576 19.79043 16.301941 19.22774 17.53125 18.349609 C 18.594006 17.590453 19.409433 16.564635 19.779297 15.386719 L 21.535156 16.255859 L 20.476562 11.951172 L 16.464844 13.744141 L 17.951172 14.480469 C 17.800527 15.304413 17.26706 16.079293 16.369141 16.720703 C 15.509688 17.334634 14.329077 17.772956 13 17.927734 L 13 13 L 15 13 L 15 11 L 13 11 L 13 10 L 13 7.8261719 A 3 3 0 0 0 15 5 A 3 3 0 0 0 12 2 z"/></svg>`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
              inlineCodeMarker: ">",
              prompt: {
                user: "ari",
                host: "localhost",
                global: true,
              },
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
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
                  custom_elements: [{ "content:encoded": node.html }],
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
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ceiphr`,
        short_name: `Ceiphr`,
        start_url: `/`,
        background_color: `#d1d5db`,
        theme_color: `#111827`,
        display: `minimal-ui`,
        include_favicon: false,
        icon: `src/images/ari.jpg`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
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
            file: `/fonts/fira_code/fira_code.css`,
          },
        ],
        web: [
          {
            name: `roboto`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`,
          },
          {
            name: `neue-haas-grotesk-display`,
            file: `https://use.typekit.net/${process.env.TYPEKIT_ID}.css`,
          },
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: isProduction && process.env.SENTRY_DSN,
        ignoreErrors: ["ChunkLoadError"],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [
          `/how-to-display-data-from-the-digitalocean-api-with-django/`,
          `/how-to-harden-your-production-django-project/`,
        ],
      },
    },
  ],
}
