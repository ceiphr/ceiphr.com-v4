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
    <div className="bg-white dark:bg-black grid grid-cols-3 sm:grid-cols-1" data-is-root-path={isRootPath}>
      {/*<header className="global-header">{header}</header>*/}
      <main className="md:col-start-2 md:col-span-1">{children}</main>
      {/*<footer>*/}
      {/*  © {new Date().getFullYear()}, Built with*/}
      {/*  {` `}*/}
      {/*  <a href="https://www.gatsbyjs.com">Gatsby</a>*/}
      {/*</footer>*/}
    </div>
  )
}

export default Layout
