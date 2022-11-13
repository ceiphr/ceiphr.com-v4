import * as React from "react"
import { Link } from "gatsby"
import External from "../../static/external-link.svg"
import Logo from "../../static/logo.svg"

type DataProps = {
  children: any
  location: any
}

const Layout: React.FC<DataProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      className="container max-w-2xl mx-auto p-6 tk-roboto"
      data-is-root-path={isRootPath}
    >
      <header className="mb-6 no-print">
        <nav className="flex justify-between">
          <Link to="/">
            <p className="sr-only">Homepage</p>
            <Logo
              width="32"
              height="32"
              className="fill-current text-gray-900 dark:text-gray-300"
            />
          </Link>
          <ul className="flex flex-row text-gray-600 dark:text-gray-400">
            <li className="pr-5">
              <a
                className="inline-block mt-1 hover:underline"
                href="https://ari.gg"
              >
                About
                <span className="inline-block transform translate-y-1">
                  <External
                    className="fill-current mb-0.5 pt-0.5"
                    width="21"
                    height="16"
                  />
                </span>
              </a>
            </li>
            <li className="pr-5">
              <a
                className="inline-block mt-1 hover:underline"
                href="https://www.paypal.me/ceiphr"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                className="inline-block mt-1 hover:underline"
                href="https://github.com/ceiphr"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-6 dark:border-gray-700 text-gray-600 dark:text-gray-400 no-print">
        <a rel="me" className="hidden" href="https://fosstodon.org/@ceiphr">
          Mastodon
        </a>
        <p>
          © 2022 Ari Birnbaum.{" "}
          <span className="float-right">
            <a
              className="hover:underline"
              href="https://www.iubenda.com/privacy-policy/18781590/legal"
            >
              Privacy
            </a>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Layout
