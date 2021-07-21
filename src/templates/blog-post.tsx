import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { isIOS, isSafari } from "react-device-detect"
import { useMediaPredicate } from "react-media-hook"
import Giscus from "react-giscus"

import CarbonAd from "../components/carbonAd"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VideoTheme from "../components/video-theme"
import ImageTheme from "../components/image-theme"

import Icons from "../components/icons"
import CC from "../../static/creative-commons.svg"
import CCBy from "../../static/creative-commons-by.svg"
import CCNC from "../../static/creative-commons-nc.svg"
import CCSA from "../../static/creative-commons-sa.svg"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      siteUrl: string
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
      modified: string
      title: string
      description: string
      unlisted: boolean
      comments: boolean
      icons: string[]
    }
  }
}

const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark
  const authorName = data.site.siteMetadata?.author?.name || ``
  const github = data.site.siteMetadata?.social?.github || ``
  const prefersReduced = useMediaPredicate("(prefers-reduced-motion: reduce)")

  if (post.frontmatter.comments === null) post.frontmatter.comments = true

  const [safari, setSafari] = React.useState()

  React.useEffect(() => {
    // @ts-ignore
    setSafari(isSafari)
  }, [setSafari])

  const [IOS, setIOS] = React.useState()

  React.useEffect(() => {
    // @ts-ignore
    setIOS(isIOS)
  }, [setIOS])

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        meta={
          post.frontmatter.icons
            ? [
                {
                  name: `og:image`,
                  content: `https://og.ceiphr.com/${
                    post.frontmatter.title
                  }?fontSize=90px${post.frontmatter.icons
                    .slice(0, 3)
                    .map(icon => `&images=https://ceiphr.com/icons/${icon}.svg`)
                    .join("")}`,
                },
              ]
            : [
                {
                  name: `og:image`,
                  content: `${data.site.siteMetadata.siteUrl}/og.jpg`,
                },
              ]
        }
      />
      <article itemScope itemType="https://schema.org/Article">
        <header>
          {post.frontmatter.icons && (
            <div className="mb-6 w-full tablet:h-96 h-48 rounded-md bg-gray-900 dark:bg-gray-300 overflow-hidden safari-overflow-hidden no-print">
              {prefersReduced || safari || IOS ? (
                <ImageTheme />
              ) : (
                <VideoTheme />
              )}
              <div
                className={`relative max-w-sm text-center -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              >
                {post.frontmatter.icons.slice(0, 3).map(icon => {
                  return Icons[icon]
                })}
              </div>
            </div>
          )}
          <h1
            itemProp="headline"
            className="text-gray-900 dark:text-gray-300 font-bold text-4xl tk-neue-haas-grotesk-display uppercase"
          >
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.date && (
            <div className="text-gray-600 dark:text-gray-400 mt-2 mb-2">
              <span>
                <a
                  href={`https://github.com/${github || ``}`}
                  className="hover:underline"
                >
                  <StaticImage
                    className="float-left mr-2 inline-block rounded-full safari-overflow-hidden"
                    placeholder="blurred"
                    layout="fixed"
                    formats={[`auto`, `webp`, `avif`]}
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
              <span>{post.frontmatter.date}</span>
            </div>
          )}
        </header>
        <CarbonAd />
        <section
          className="prose dark:prose-light lg:prose-xl print:text-black pt-4"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {post.frontmatter.date && (
          <div className="text-gray-600 dark:text-gray-400 print:text-black leading-7">
            {post.frontmatter.modified && (
              <>
                <br />
                <i>Last modified: {post.frontmatter.modified}.</i>
                <br />
              </>
            )}
            <br />
            <div className="text-gray-900 dark:text-gray-300 mb-1">
              <CC className="inline-block fill-current" />
              <CCBy className="inline-block fill-current" />
              <CCNC className="inline-block fill-current" />
              <CCSA className="inline-block fill-current" />
            </div>
            <p>
              Except where otherwise noted, this post is licensed under a{` `}
              <a
                rel="license noopener noreferrer"
                target="_blank"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                className="hover:underline"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International (CC BY-NC-SA 4.0)
              </a>
              {` `} license.
            </p>
          </div>
        )}
      </article>
      {post.frontmatter.comments && (
        <div className="pt-8 mt-8 border-t-2 border-gray-200 dark:border-gray-700">
          <Giscus
            repo="ceiphr/ceiphr.com-comments"
            repoId="MDEwOlJlcG9zaXRvcnkzNzg3NDY2Mzg"
            category="Announcements"
            categoryId="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDQzMTY5"
            mapping="specific"
            reactionsEnabled="1"
            theme="preferred_color_scheme"
            term={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
          />
        </div>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
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
        modified(formatString: "MMMM DD, YYYY")
        description
        unlisted
        comments
        icons
      }
    }
  }
`
