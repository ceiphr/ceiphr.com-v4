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
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'ceiphr/ceiphr.com-comments')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('id', 'utterances')
    scriptEl.setAttribute('theme', 'preferred-color-scheme')
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
        className="blog-post"
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className="text-gray-800 dark:text-gray-300 font-bold text-4xl">{post.frontmatter.title}</h1>
          <p className="text-gray-400 dark:text-gray-500 uppercase">{post.frontmatter.date}</p>
        </header>
        <section
          className="prose dark:prose-light lg:prose-xl mt-4 mb-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500">
          <Bio />
        </footer>
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
