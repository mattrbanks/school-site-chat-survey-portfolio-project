import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <div style={{ margin: "1rem" }}>
        <div className="">
          <h3>
            If you have any questions or concerns we would be happy to speak
            with you. Education is one of the most important parts of a child's
            life and we are here to facilitate your child's growth.
          </h3>
        </div>
        <div className="">
          <h3>
            ADDRESS:
            <br />7 Eagle Rd, Schoolville, CT, 97531
          </h3>
        </div>
        <div className="">
          <h3>
            Thanks for taking the time to browse my elementary school site.
            Please contact me in one of the following ways. -Matt
          </h3>
        </div>
        <h3>Contact Matt:</h3>
        <div className="">
          <div>
            <a
              href="https://github.com/mattrbanks"
              target="_blank"
              className=""
            >
              github
              {/* <i
                id="git-hub-icon"
                className="fab fa-github-square icon col"
              ></i> */}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/matthewr-banks"
              target="_blank"
              className=""
            >
              linkedin
              {/* <i id="linkedin-icon" className="fab fa-linkedin icon col"></i> */}
            </a>
          </div>
          <div>
            <a
              href="mailto:banks.matt81@gmail.com"
              target="_blank"
              className=""
            >
              email
              {/* <i
                id="email-icon"
                className="fas fa-envelope-open-text icon col"
              ></i> */}
            </a>
          </div>
          <div>
            <a
              href="mailto:banks.matt81@gmail.com"
              target="_blank"
              className=""
            >
              resume
              {/* <i id="resume-icon" className="fas fa-file icon col"></i> */}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
