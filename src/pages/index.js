import React from "react"
import FourGridButtons from "../components/fourGridButtons"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "../components/slider"
import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Eagle Elementary School" />
    <Slider />
    <div style={{ margin: "1rem" }}>
      <h1>Welcome to the home of Eagle Elementary School.</h1>
      <p>
        Here at Eagle Elementary School, we have many options to offer families.
        Our goal is to give families the ability to talk to teachers on our
        website without having to be there in person. With all the recent
        changes in our world, we want technology to make learning more
        accessible than ever. We value parents and what they have to say. The
        more everyone is involved the better the learning environment for the
        child, who depends on us to guide them.{" "}
      </p>
      <p>
        We have a real-time chat on our site where teachers and parents can
        connect, during pre-scheduled windows, throughout each day. We care and
        we want to help even when you can't see us in person. Please have a look
        around and feel free to leave your feedback by using our online survey.
        Your feedback helps us do a better job to meet your family's needs.
      </p>
    </div>
    <FourGridButtons />
    <div
      style={{ maxWidth: "300px", marginBottom: "1.45rem", marginLeft: "1rem" }}
    >
      <div
        className="eagle-bubble eagle-bubble-arrow"
        style={{ marginBottom: "1.45rem", marginLeft: "4rem" }}
      >
        Have a great school year!
      </div>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
