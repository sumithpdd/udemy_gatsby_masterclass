import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page three" />
    <h1>Hi from the page3 </h1>
    <p>Welcome to page 3</p>
    <Link to="/page-2">Go to page 2</Link>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
