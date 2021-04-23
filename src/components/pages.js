import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PagesQuery = () => {
	const data = useStaticQuery(graphql`
    {
      allWpPage {
        edges {
          node {
            id
            title
            uri
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  `)
	console.log( data );
	const result = <>{data.allWpPage.edges.map( ( { node }, index ) => (
			<div key={index}>
				<p><strong>{node.title}</strong><br/>
				{node.uri}<br/>
				{node.author.node.name}</p>
			</div>
			))}</>
	return (
		<>
			<h4>Pages from diwptesting.wpengine.com using WPGraphQL</h4>
			{result}
		</>
	)
	//return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default PagesQuery;