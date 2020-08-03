import React from "react"
import Layout from "../components/layout"
import ImageReusable from "../components/imageReusable"
import SEO from "../components/seo"

const PrincipalsMessage = () => {
  return (
    <Layout>
      <SEO title="principal's message" />
      <div style={{ margin: "1rem" }}>
        <h1>PRINCIPAL'S MESSAGE</h1>
        <p>
          <span style={{ fontSize: "1.5rem" }}>
            Welcome to Eagle Elementary School!
          </span>
        </p>
        <p>
          It is our dedication here at Eagle Elementary that ensures each one of
          our students receives quality instruction from highly qualified
          teachers. Our knowledgeable, caring, and enthusiastic teachers provide
          rigorous learning with a focus on relationship building. We believe
          every student is capable of rising above and "soaring" to their true
          potential. Our school has the motto of “Safety, Ownership,
          Achievement, and Respect!” and it is a motto that guides everything we
          do at Eagle Elementary. Our school offers many academic and social
          programs to support our students in rising to new heights. We look
          forward to another year of watching our students SOAR!
        </p>
        <div style={{ maxWidth: `700px`, margin: "1rem auto" }}>
          <ImageReusable
            alt="kids working on a project"
            filename="principal2.jpg"
          />
        </div>
      </div>
    </Layout>
  )
}

export default PrincipalsMessage
