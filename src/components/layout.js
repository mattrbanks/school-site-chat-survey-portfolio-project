/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Menu from "./menu"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <div
        style={
          {
            //margin: `0 auto`,
            //maxWidth: 1700,
            //padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <main>{children}</main>
        <footer style={{ fontSize: "0.8rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ marginLeft: "1rem" }}>Eagle Elementary</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  This is a template <br />
                  school site.
                </li>
                <li>
                  This site is for a <br />
                  portfolio.
                </li>
                <li>
                  This site was <br />
                  developed by <br />
                  Matthew Banks.
                </li>
              </ul>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ marginLeft: "1rem" }}>Contact</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="https://github.com/mattrbanks">Github</Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/matthewr-banks">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <a href="mailto:banks.matt81@gmail.com">Email</a>
                </li>
              </ul>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ marginLeft: "1rem" }}>Links</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/curriculum">Our curriculum</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/principals-message">Principals message</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5
              style={{
                textAlign: "center",
                borderTop: "1px solid black",
                marginBottom: "0",
                padding: "1rem",
              }}
            >
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href="https://github.com/mattrbanks">Matthew R Banks</a>
            </h5>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
