import * as React from "react"
import { Link } from "gatsby"

type DataProps = {
  children: any
  location: any
  title: string
}

const Layout: React.FC<DataProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="container max-w-2xl mx-auto p-4" data-is-root-path={isRootPath}>
      <header>{header}</header>
      <main>{children}</main>
      <footer className="mt-4 pt-6 mb-6 border-t-2 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500">
        <p>© 2021 Ari Birnbaum.{" "}
        <span className="float-right"><a href="https://www.iubenda.com/privacy-policy/18781590/legal">Privacy</a></span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
