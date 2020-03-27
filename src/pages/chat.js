import React from "react"
import Dashboard from "../components/dashboard"
import Store from "../store"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Chat = () => {
  return (
    <div>
      <SEO title="chat" />
      <div>
        <h1>hello from chat</h1>
        <Store>
          <Dashboard />
        </Store>
        <Link to="/" onClick="window.location.reload()">
          BACK TO HOMEPAGE AND DISCONNECT
        </Link>
      </div>
    </div>
  )
}

export default Chat
