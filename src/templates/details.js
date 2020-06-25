import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/seo"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulMonthlyEventPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
//If you don't get an image alt or url, run gatsby clean to clean the cache and restart the server.
// Also, gatsby-source-contentful will throw graphql errors if there is not a placeholder -->
// --> image on the contentful site in the media tab. It does not need to be used though.
//There was also an error with "en-US" where it was throwing an error as "en-us"
const Details = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulMonthlyEventPost.title} />
      <div style={{ margin: "1rem" }}>
        <h1>{props.data.contentfulMonthlyEventPost.title}</h1>
        <p>{props.data.contentfulMonthlyEventPost.publishedDate}</p>
        <PostsImageStyleWrapper>
          {documentToReactComponents(
            props.data.contentfulMonthlyEventPost.body.json,
            options
          )}
        </PostsImageStyleWrapper>
        <Link to="/events">
          <p>
            <span style={{ color: "blue", textDecoration: "underline" }}>
              &larr; Back to Events page
            </span>
          </p>
        </Link>
      </div>
    </Layout>
  )
}

export default Details

const PostsImageStyleWrapper = styled.div`
  color: black;
  img {
    display: block;
    margin: auto;
    padding: 1rem;
    max-width: 750px;
  }
`
