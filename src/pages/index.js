import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { LocalizedLink as Link } from 'gatsby-theme-i18n'
import { useLingui } from '@lingui/react'

const BlogPage = ({ data }) => {
	const { i18n } = useLingui()
	return (
		<Layout pageTitle="Blog Posts">
			<ul>
				{
					data.allMdx.nodes.map(node => (
						<article key={node.id}>
							<h2>
								<Link to={`/blog/${node.frontmatter.slug}`}>
									{node.frontmatter.title}
								</Link>
							</h2>
							<p>{i18n.date(node.frontmatter.date, { dateStyle: "long" })}</p>
						</article>
					))
				}
			</ul>
		</Layout>
	)
}

export const query = graphql`
  query ($locale: String) {
    allMdx(sort: { frontmatter: { date: DESC }} filter: {fields: {locale: {eq: $locale}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts"/>

export default BlogPage