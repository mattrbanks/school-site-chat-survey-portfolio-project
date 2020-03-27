import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ChatLogin = () => (
  <Layout>
    <SEO title="chatlogin" />
    <h1>Hello from ChatLogin</h1>
    <Link to="/chat">Go to chat</Link>
  </Layout>
)

export default ChatLogin
