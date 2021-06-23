import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Comment from "../components/comment"
import Icons from "../components/icons"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      author: {
        name: string
      }
      social: {
        github: string
      }
    }
  }
  markdownRemark: {
    excerpt: string
    html: string
    frontmatter: {
      date: string
      title: string
      description: string
      unlisted: boolean
      comments: boolean
      icons: string[]
    }
  }
}

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const post = data.markdownRemark
  const authorName = data.site.siteMetadata?.author.name
  const github = data.site.siteMetadata.social?.github
  const siteTitle = data.site.siteMetadata?.title || `Title`

  if (post.frontmatter.comments === null) post.frontmatter.comments = true

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          {post.frontmatter.icons &&
          <div className="mb-6 w-full tablet:h-96 h-48 rounded-md bg-gray-900 dark:bg-gray-300">
            <div
              className="relative max-w-sm text-center text-gray-300 dark:text-gray-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {post.frontmatter.icons.slice(0, 3).map(icon => {
                return Icons[icon]
              })}
            </div>
          </div>
          }
          <h1 itemProp="headline"
              className="text-gray-900 dark:text-gray-300 font-bold text-4xl tk-neue-haas-grotesk-display uppercase"
          >
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.date &&
          <div
            className="text-gray-400 dark:text-gray-500 mt-2 mb-2">
            <span>
              <a href={`https://github.com/${github || ``}`} className="hover:underline">
                <StaticImage
                  className="float-left mr-2 inline-block rounded-full"
                  placeholder="blurred"
                  layout="fixed"
                  // TODO Fix this type issue.
                  // @ts-ignore
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/profile-pic.png"
                  width={24}
                  height={24}
                  quality={50}
                  alt="Profile picture"
                />
                {authorName}
              </a>
              <strong> &#xb7; </strong>
            </span>
            <span>
              {post.frontmatter.date}
            </span>
          </div>
          }
        </header>
        <section
          className="prose dark:prose-light lg:prose-xl pt-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      {post.frontmatter.comments &&
      <Comment className="pt-4 mt-4 border-t-2 border-gray-200 dark:border-gray-700" />}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
    ) {
        site {
            siteMetadata {
                title
                author {
                    name
                }
                social {
                    github
                }
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                unlisted
                comments
                icons
            }
        }
    }
`
