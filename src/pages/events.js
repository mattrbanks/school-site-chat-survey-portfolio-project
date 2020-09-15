import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
  },
  list: {
    listStyleType: "none",
    margin: "2rem",
  },
  listItem: {
    margin: "1rem 0",
    "& a": {
      background: "#f4f4f4",
      "&:hover": {
        background: "#e4e4e4",
      },
      color: "#000000",
      display: "block",
      padding: "1rem",
    },
    "& h2": {
      marginBottom: 0,
    },
    "& p": {
      color: "#777777",
      fontSize: ".8rem",
      fontStyle: "italic",
    },
  },
}))

const Events = () => {
  const classes = useStyles()

  const rootCSS = classes.root
  const listCSS = classes.list
  const listItemCSS = classes.listItem

  const data = useStaticQuery(graphql`
    query {
      allContentfulMonthlyEventPost(
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  //there is only one post a week for events so the key can be the date here.

  return (
    <Layout>
      <SEO title="events" />
      <div className={rootCSS}>
        <h1 style={{ color: "black" }}>Events</h1>
        <ol className={listCSS}>
          {data.allContentfulMonthlyEventPost.edges.map(edge => {
            return (
              <li className={listItemCSS} key={edge.node.publishedDate}>
                <Link to={`/events/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Events
