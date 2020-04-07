import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from "axios"

const ChatLogin = () => {

  const [name, setName] = React.useState("")
  const [isLoggedIn, setLoginBoolean] = React.useState(false)

  const userName = {
    name
  }


  const nameHandler = (e) => {
    e.preventDefault()
    console.log(userName)
    axios.get("http://localhost:3000/", userName)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    setName("")
  }

return (
  <Layout>
    <SEO title="chatlogin" />
    <h1>Hello from ChatLogin</h1>
    <form onSubmit={nameHandler}>
      <div>
        <div>
        <label htmlFor="name">Name (required)</label>
        </div>
        <div>
          <input type="text" name="name" placeholder="Enter your name" required value={name} onChange={e => setName(e.target.value)}/>
        </div>
      </div>
      <button type="submit" value="Submit" >Submit Username</button>
    </form>
    <Link to="/chat">Go to chat</Link>
  </Layout>
)
}

export default ChatLogin