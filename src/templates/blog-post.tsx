import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Comment from "../components/comment"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    excerpt: string
    html: string
    frontmatter: {
      date: string
      title: string
      description: string
    }
  }
}

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  // Used for https://utteranc.es/
  // https://creativcoder.dev/how-to-add-github-utterances-blog
  const commentBox = React.createRef<HTMLInputElement>()

  React.useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://giscus.app/client.js'
    scriptEl.setAttribute('data-repo', 'ceiphr/ceiphr.com-comments')
    scriptEl.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzNzg3NDY2Mzg=')
    scriptEl.setAttribute('data-category', 'Announcements')
    scriptEl.setAttribute('data-category-id', 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDQzMTY5')
    scriptEl.setAttribute('data-mapping', 'title')
    scriptEl.setAttribute('data-reactions-enabled', '1')
    scriptEl.setAttribute('data-theme', 'preferred_color_scheme')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="pb-4 mb-4 border-b-2 border-gray-200 dark:border-gray-700"
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className="text-gray-800 dark:text-gray-300 font-bold text-4xl">{post.frontmatter.title}</h1>
          <p className="text-gray-400 dark:text-gray-500 uppercase">{post.frontmatter.date}</p>
        </header>
        <section
          className="prose dark:prose-light lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <Comment commentBox={commentBox} />
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
            }
        }
    }
`
