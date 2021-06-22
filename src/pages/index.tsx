import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useMediaPredicate } from "react-media-hook"

import Banner from "../../static/banner-white.svg"
import BannerDark from "../../static/banner-black.svg"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    nodes: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        date: string
        title: string
        description: string
      }
    }[]
  }
}

const BlogIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const isDark = useMediaPredicate("(prefers-color-scheme: dark)")

  return (
    <Layout location={location} title={siteTitle}>
      <Seo />
      <div className="w-full tablet:h-96 h-48 rounded-md bg-gray-900 dark:bg-gray-300">
        <div className="relative max-w-sm text-center text-gray-300 dark:text-gray-900 hero-banner">
          {isDark ? <BannerDark/> : <Banner/>}
        </div>
      </div>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug} className="pt-4">
              <article
                itemScope
                itemType="https://schema.org/Article"
              >
                <header>
                  <h2 className="-mb-1">
                    <Link to={post.fields.slug} itemProp="url">
                      <span className="text-gray-900 dark:text-gray-300 text-xl font-bold hover:underline" itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <span
                    className="inline-block text-gray-400 dark:text-gray-500 text-sm uppercase">{post.frontmatter.date}
                  </span>
                </header>
                <section>
                  <p
                    className="text-gray-600 dark:text-gray-400 mb-1"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt
                    }}
                    itemProp="description"
                  />
                </section>
                <Link to={post.fields.slug} itemProp="url" className="text-blue-600 dark:text-blue-400 text-sm uppercase hover:underline">
                  Read Post <strong>&#8594;</strong>
                </Link>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC } 
            filter: {frontmatter: {unlisted: {ne: true}}}
        ) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`
