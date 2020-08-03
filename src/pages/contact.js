import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageReusable from "../components/imageReusable"

const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <div style={{ margin: "1rem" }}>
        <div>
          <h4>
            If you have any questions or concerns we would be happy to speak
            with you. Education is one of the most important parts of a child's
            life and we are here to facilitate your child's growth.
          </h4>
        </div>
        <div>
          <h4>
            ADDRESS:
            <br />7 Eagle Rd, Schoolville, CT, 97531
          </h4>
        </div>
        <div>
          <h4>
            Thanks for taking the time to browse my elementary school site.
            Please contact me in one of the following ways. -Matt
          </h4>
        </div>
        <h4>Contact Matt:</h4>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "1rem" }}>
            <a href="https://github.com/mattrbanks" target="_blank">
              <div
                style={{
                  width: `50px`,
                }}
              >
                <ImageReusable
                  alt="github link"
                  filename="icons8Github50.png"
                />
              </div>
            </a>
          </div>
          <div style={{ margin: "1rem" }}>
            <a
              href="https://www.linkedin.com/in/matthewr-banks"
              target="_blank"
            >
              <div
                style={{
                  width: `50px`,
                }}
              >
                <ImageReusable
                  alt="linkedin link"
                  filename="icons8LinkedinCircled50.png"
                />
              </div>
            </a>
          </div>
          <div style={{ margin: "1rem" }}>
            <a href="mailto:banks.matt81@gmail.com" target="_blank">
              <div
                style={{
                  width: `50px`,
                }}
              >
                <ImageReusable
                  alt="email link"
                  filename="icons8EmailSign50.png"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
