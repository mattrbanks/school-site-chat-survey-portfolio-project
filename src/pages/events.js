import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
//import { useTheme, useMediaQuery } from "@material-ui/core"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2rem",
    //width: "90%",
  },
  list: {
    listStyleType: "none",
    margin: "2rem",
    //width: "90%",
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
    //width: "90%",
  },
}))

const Events = () => {
  const classes = useStyles()
  //const isActive = useMediaQuery()
  const rootCSS = classes.root
  const listCSS = classes.list
  const listItemCSS = classes.listItem

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  console.log(data)

  //there is only one post a week for events so the key can be the date here.

  return (
    <Layout>
      <div className={rootCSS}>
        <h1 style={{ color: "black" }}>Events</h1>
        <ol className={listCSS}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={listItemCSS} key={edge.node.frontmatter.date}>
                <Link to={`/events/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
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
