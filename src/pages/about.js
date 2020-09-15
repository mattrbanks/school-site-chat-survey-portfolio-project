import React from "react"
import ImageReusable from "../components/imageReusable"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

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
      <ImagesMobile>
        <div
          style={{
            width: `100%`,
            margin: "0.5rem 1rem 0.5rem 0rem",
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
            margin: "0.5rem 0.5rem 0.5rem 0rem",
            maxWidth: `750px`,
          }}
        >
          <ImageReusable
            alt="books and alphabet blocks"
            filename="readingKids.jpg"
          />
        </div>
      </ImagesMobile>
    </div>
  </Layout>
)

export default About

const ImagesMobile = styled.div`
  display: flex;
  margin: 1rem;
  @media only screen and (max-width: 750px) and (orientation: portrait) {
    display: block;
  }
`
