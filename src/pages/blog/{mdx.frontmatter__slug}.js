import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image)
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
      	image={image}
      	alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
      	Photo Credit:{" "}
      	<a href={data.mdx.frontmatter.hero_image_credit_link}>
      		{data.mdx.frontmatter.hero_image_credit_text}
      	</a>
      </p>
      <article>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
	)
}

export const query = graphql`
	query ($locale: String, $frontmatter__slug: String) {
	  mdx(fields: {locale: {eq: $locale}}, frontmatter: {slug: {eq: $frontmatter__slug}}) {
	    frontmatter {
	      title
	      date(formatString: "MMMM D, YYYY")
	      hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
	    }
	    body
	  }
	}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost