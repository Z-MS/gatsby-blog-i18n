import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
	return (
		<main>
			<Layout pageTitle="About">
				<p>This is a simple blog where code lives.</p>
			</Layout>
		</main>
	);
};

export const Head = () => <Seo title="About Me"/>

export default AboutPage