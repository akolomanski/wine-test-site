import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

import SEO from '../components/seo';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<ul>
			{data.allStrapiWine.edges.map((document) => (
				<li>
					<h2>
						<Link to={`${document.node.id}`}>{document.node.Name}</Link>
					</h2>
          <img src={document.node.photos.publicURL} alt={`${document.node.id} wine`}/>
		  <h3>Price: ${document.node.Price}</h3>
          <p>{document.node.description}</p>
				</li>
			))}
		</ul>
	</Layout>
);

export default IndexPage;

export const pageQuery = graphql`
	query {
		allStrapiWine {
			edges {
				node {
					Name
					Price
					description
					id
					photos {
						publicURL
					}
				}
			}
		}
	}
`;
