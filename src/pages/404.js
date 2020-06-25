import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ margin: "1rem" }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
          &larr; Go to home page
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
