import React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const ProductTemplate = ({ data: { contentfulProduct } }) => (
  <Layout>
    <div
      style={{
        marginLeft: "0 auto",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h2>
        {contentfulProduct.name} -{" "}
        <span style={{ color: "#ccc" }}>
          Added on {contentfulProduct.createdAt}
        </span>
      </h2>
      <h4>{contentfulProduct.price}</h4>
      <p>{contentfulProduct.description}</p>

      <GatsbyImage
        style={{ margin: "0 auto", maxWidth: 600 }}
        image={getImage(contentfulProduct.image)} alt="{contentfulProduct.name}"
      />
    </div>
  </Layout>
)
export default ProductTemplate

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      description
      createdAt(formatString: "MMMM DO, YYYY, h:mm:ss a")
      image {
        gatsbyImageData
        fixed {
          src
          }        
        }
      
    }
  }
`
