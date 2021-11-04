import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const postTemplate = ({ data: post }) => (
  <Layout>
    <h2>{post.markdownRemark.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }} />
  </Layout>
)
export default postTemplate

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {
            slug: { eq: $slug }
        }) {
            html
            frontmatter {
                title
            }            
        }
    }
`
