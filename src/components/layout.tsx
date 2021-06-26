import * as React from "react"
import { Link } from "gatsby"
import Logo from "../../static/logo.svg"

type DataProps = {
  children: any
  location: any
  title: string
}

const Layout: React.FC<DataProps> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="container max-w-2xl mx-auto p-6 tk-roboto" data-is-root-path={isRootPath}>
      <header className="pb-6">
        <nav className="flex justify-between">
          <Link to="/"><p className="sr-only">Homepage</p><Logo alt="Ari" width="32" height="32" className="fill-current text-gray-900 dark:text-gray-300" /></Link>
          <ul className="flex flex-row text-gray-400 dark:text-gray-500">
            <li className="pr-5"><Link className="inline-block mt-1 hover:underline" to="/about/">About</Link></li>
            <li className="pr-5"><a className="inline-block mt-1 hover:underline" href="https://www.paypal.me/ceiphr">Donate</a></li>
            <li><a className="inline-block mt-1 hover:underline" href="https://github.com/ceiphr/">GitHub</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer
        className="mt-4 pt-6 border-t-2 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500">
        <p>© 2021 Ari Birnbaum.{" "}
          <span className="float-right"><a className="hover:underline"
            href="https://www.iubenda.com/privacy-policy/18781590/legal">Privacy</a></span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
