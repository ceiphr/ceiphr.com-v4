import * as React from "react"
import { Link } from "gatsby"
import { useMediaPredicate } from "react-media-hook"
import Logo from "../../static/logo-black.svg"
import DarkLogo from "../../static/logo-white.svg"

type DataProps = {
  children: any
  location: any
  title: string
}

const Layout: React.FC<DataProps> = ({ location, title, children }) => {
  const isDark = useMediaPredicate("(prefers-color-scheme: dark)")
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <Link to="/">{isDark ? (
      <DarkLogo alt="Ceiphr" width="32" height="32" />
    ) : (
      <Logo alt="Ceiphr" width="32" height="32" />
    )}</Link>
  )

  return (
    <div className="container max-w-2xl mx-auto p-4 tk-roboto" data-is-root-path={isRootPath}>
      <header className="pb-4">
        <nav className="flex justify-between">
          {header}
          <ul className="flex flex-row text-gray-400 dark:text-gray-500">
            <li className="pr-5"><Link className="inline-block pt-1" to="/about">About</Link></li>
            <li className="pr-5"><a className="inline-block pt-1" href="https://www.paypal.me/ceiphr">Donate</a></li>
            <li><a className="inline-block pt-1" href="https://github.com/ceiphr/">GitHub</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer
        className="mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500">
        <p>© 2021 Ari Birnbaum.{" "}
          <span className="float-right"><a
            href="https://www.iubenda.com/privacy-policy/18781590/legal">Privacy</a></span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
