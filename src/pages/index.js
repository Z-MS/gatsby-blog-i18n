import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
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
							<p>{node.frontmatter.date}</p>
						</article>
					))
				}
			</ul>
		</Layout>
	)
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
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
