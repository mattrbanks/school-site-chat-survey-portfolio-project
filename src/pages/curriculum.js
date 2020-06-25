import React from "react"
import Layout from "../components/layout"
import ImageReusable from "../components/imageReusable"
import SEO from "../components/seo"

const Curriculum = () => {
  return (
    <Layout>
      <SEO title="curriculum" />
      <div style={{ margin: "3.5rem" }}>
        <h1>Our Modern Curriculum</h1>
        <div style={{ maxWidth: `50%`, marginBottom: "1rem" }}>
          <ImageReusable
            alt="teacher reading to student"
            filename="teacherReading.jpg"
          />
        </div>
        <h2>English Language Arts</h2>
        <p>
          <span style={{ fontSize: "1.5rem" }}>
            The "EL Education K-3 Language Arts" curriculum is a well-rounded,
            standards-based literacy program that engages students through real
            world content. It is written by teachers for teachers and everything
            is available free online. The program is designed to reach all
            learners and offers differentiation for English language learners
            and students below grade level. To learn more about our English
            Language Arts Curriculum click the video &darr;.
          </span>
        </p>
        <iframe
          src="https://player.vimeo.com/video/252954913"
          width="640"
          height="480"
          title={"K-2 Module Lessons Overview"}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
        <p>
          <a href="https://vimeo.com/252954913">K-2 Module Lessons Overview</a>{" "}
          from <a href="https://vimeo.com/eledu">EL Education</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
        <div style={{ maxWidth: `50%`, marginBottom: "1rem" }}>
          <ImageReusable alt="kid doing math" filename="kidDoingMath3.jpg" />
        </div>
        <h2>Math</h2>
        <p>
          <span style={{ fontSize: "1.5rem" }}>
            Our math curriculum offers support for developing students into
            mathematical thinkers. It engages our students in real world math,
            while supporting a students' ability to reason and explain their
            thinking orally, visually, and in writing. This curriculum will help
            our students build necessary 21st Century skills to prepare them for
            a world built using math.
          </span>
        </p>
      </div>
    </Layout>
  )
}

export default Curriculum
