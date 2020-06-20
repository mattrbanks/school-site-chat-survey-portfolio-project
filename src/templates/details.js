import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Details = props => {
  return (
    <Layout>
      <div style={{ margin: "1rem" }}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
        <Link to="/events">
          <p>
            <span style={{ color: "blue" }}>&larr; Back to Events page</span>
          </p>
        </Link>
      </div>
    </Layout>
  )
}

export default Details
