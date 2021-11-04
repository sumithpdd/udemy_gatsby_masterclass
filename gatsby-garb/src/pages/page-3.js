import * as React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

const thirdPage = () => (
  <Layout>
    <Seo title="Page three" />
    <h1>Hi from the page3 </h1>
    <p>Welcome to page 3</p>
    <h3>Image File Data</h3>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>size of image</th>
              <th>Extension</th>
              <th>Birthtime of Image</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({node}, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />

    <Link to="/page-2">Go to page 2</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default thirdPage
