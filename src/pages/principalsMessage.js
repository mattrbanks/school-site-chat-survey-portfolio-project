import React from "react"
import Layout from "../components/layout"
import ImageReusable from "../components/ImageReusable"

const PrincipalsMessage = () => {
  return (
    <Layout>
      <div style={{ margin: "3.5rem" }}>
        <h1>PRINCIPAL'S MESSAGE</h1>
        <p>
          <span style={{ fontSize: "1.5rem" }}>
            Welcome to Eagle Elementary School!
          </span>
        </p>
        <p>
          <span style={{ fontSize: "1.5rem" }}>
            It is our dedication here at Eagle Elementary that ensures each one
            of our students receives quality instruction from highly qualified
            teachers. Our knowledgable, caring, and enthusiatstic teachers
            provide rigorous learning with a focus on relationship building. We
            believe every student is capable of rising above and "soaring" to
            their true potential. Our school has the motto of “Safety,
            Ownership, Achievement, and Respect!” and it is a motto that guides
            everything we do at Eagle Elementary. Our school offers many
            academic and social programs to support our students in rising to
            new heights. We look forward to another year of watching our
            students SOAR!
          </span>
        </p>
        <div style={{ maxWidth: `50%`, margin: "1rem auto" }}>
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
