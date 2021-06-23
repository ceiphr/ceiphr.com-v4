import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404" />
      <div style={{ height: `calc(100vh - 114px - 32px)` }}>
        <div className="relative text-center top-1/3 transform -translate-y-1/2">
          <h1
            className="text-gray-900 dark:text-gray-300 font-bold text-6xl tablet:text-8xl uppercase">404</h1>
          <p className="text-gray-600 dark:text-gray-400">Nothing here. Move along.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
