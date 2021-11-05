import * as React from "react"
import { graphql, Link } from "gatsby"
import {getImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Product = ({ data: { allContentfulProduct } }) => (
  <Layout>
    <div>
      {allContentfulProduct.edges.map(({ node: product }) => (
        <div key={product.id}>
          <h2>Grab Products</h2>
          <Link to={`/products/${product.slug}`} style={{
            textDecoration:'none', color:'#551a8b'
          }}>
            <h3>{product.name} {' '}<span style={{
              fontSize:'1.2rem',
              fontWeight: '300',
              color:'#f60'
            }}> {product.price}</span></h3>
          </Link>
          <GatsbyImage image={getImage(product.image)} width={60}  alt="{product.name}" />
        </div>
      ))}

    
    </div>
  </Layout>
)

export const query = graphql`
{
    allContentfulProduct{
        edges{
            node{
                id
                slug
                name
                price
                image {
                  gatsbyImageData
                  fixed {
                    src
                  }
                  
                }
            }
        }
   }
 }`

export default Product
