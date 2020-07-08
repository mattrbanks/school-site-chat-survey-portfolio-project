import React from "react"
import { Link } from "gatsby"

const ThankYouPage = () => {
  return (
    <div style={{ margin: "1rem" }}>
      <h1>
        We appreciate your feedback! Thank you for helping us make Eagle
        Elementary an even better school!
      </h1>
      <Link to="/">
        <span style={{ color: "blue", textDecoration: "underline" }}>
          &larr; Go back to home page
        </span>
      </Link>
    </div>
  )
}

export default ThankYouPage
