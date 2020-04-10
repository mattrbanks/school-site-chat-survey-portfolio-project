import React from "react"
//import { nominalTypeHack } from "prop-types"
import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "1rem",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/chat">Chat</Link>
      </li>
      <li>
        <Link to="/survey">Survey</Link>
      </li>
    </ul>
  </div>
)

export default Menu
