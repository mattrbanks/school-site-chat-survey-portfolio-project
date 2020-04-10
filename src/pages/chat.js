import React from "react"
import Dashboard from "../components/dashboard"
import Store from "../store"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export let userName = []
export let userType = []

const Chat = props => {
  const [name, setName] = React.useState("")
  const [isLoggedIn, setLoginBoolean] = React.useState(false)
  const [type, setType] = React.useState("")

  const nameHandler = e => {
    e.preventDefault()
    console.log(name)
    userName.push(name)
    console.log(userName)
    console.log(type)
    userType.push(type)
    console.log(userType)
    setName("")
    setLoginBoolean(true)
    setType("")
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
        <Layout>
          <h1>Hello from ChatLogin</h1>
          <form onSubmit={nameHandler}>
            <div>
              <div>
                <label htmlFor="name">Name (required)</label>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label>Are you a parent, a student, or a teacher?</label>
              <label>
                <input
                  required
                  value="parent"
                  checked={type === "parent"}
                  onChange={e => setType(e.target.value)}
                  type="radio"
                  name="type"
                />
                Parent
              </label>

              <label>
                <input
                  required
                  value="teacher"
                  checked={type === "teacher"}
                  onChange={e => setType(e.target.value)}
                  type="radio"
                  name="type"
                />
                Teacher
              </label>

              <label>
                <input
                  required
                  value="student"
                  checked={type === "student"}
                  onChange={e => setType(e.target.value)}
                  type="radio"
                  name="type"
                />
                Student
              </label>
            </div>
            <button type="submit" value="Submit">
              Submit Username
            </button>
          </form>
        </Layout>
      </div>
    )
  }
}

export default Chat
