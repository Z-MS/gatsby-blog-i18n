import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import { LocalizedLink as Link } from 'gatsby-theme-i18n'
import { Trans } from '@lingui/macro'
import LocaleSwitcher from './LocaleSwitcher'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}><Trans id="site_title">{data.site.siteMetadata.title}</Trans></header>
      <LocaleSwitcher/>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}><Trans>Blog</Trans></Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}><Trans>About</Trans></Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout