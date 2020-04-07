import React from "react"
import Dashboard from "../components/dashboard"
import Store from "../store"
import { Link } from "gatsby"
import SEO from "../components/seo"
import axios from "axios"
import Layout from "../components/layout"

const Chat = () => {

  const [name, setName] = React.useState("")
  const [isLoggedIn, setLoginBoolean] = React.useState(false)

  const userName = {
    name
  }


  const nameHandler = (e) => {
    e.preventDefault()
    console.log(name)
    axios.get("http://localhost:3000/", name)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    setName("")
    setLoginBoolean(true)
  }

  if (isLoggedIn === true) {
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
  } else {
    return (
      <div>
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
      </div>
    )
  }
}

export default Chat
