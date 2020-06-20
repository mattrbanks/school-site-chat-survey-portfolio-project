import React from "react"
//import { Link } from "gatsby"
import ImageReusable from "../components/ImageReusable"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" />
    <div>
      <h1 style={{ marginLeft: "1rem" }}>Our Mission</h1>
      <p style={{ margin: "1rem" }}>
        We favor an individual approach to each child's needs and their level of
        knowledge. We take cultural differences and family structure into
        consideration when educating each student. We offer many different types
        of work in order to inspire individual students to develop their
        creative, linguistic, mathematical, and social skills. Our goal is to
        educate children to be exemplary citizens of the world who are ready to
        solve real world problems and who are faithful to the principles and
        values that they learn in our school, such as respect, care and love. We
        hope to be the support and inspiration that your child needs to be
        productive and successful.
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: `100%`,
            margin: `1.7rem 0.5rem auto`,
            maxWidth: `750px`,
          }}
        >
          <ImageReusable
            alt="books and alphabet blocks"
            filename="readingKid.jpg"
          />
        </div>
        <div
          style={{
            width: `100%`,
            margin: `1.7rem 0.5rem auto`,
            maxWidth: `750px`,
          }}
        >
          <ImageReusable
            alt="books and alphabet blocks"
            filename="readingKids.jpg"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default About
