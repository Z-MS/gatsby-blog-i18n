import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Trans, t } from '@lingui/macro'

const AboutPage = () => {
	return (
		<main>
			<Layout pageTitle={t`About`}>
				<p><Trans>This is a simple blog where code lives.</Trans></p>
			</Layout>
		</main>
	);
};

export const Head = () => <Seo title="About Me"/>

export default AboutPage