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
          <h1>Welcome to Eagle Chat.</h1>
          <p>
            In the left panel, you have a number of topic rooms you can click on
            to enter. Just click your child's grade to enter a group discussion
            involving parents, teachers, and students. Once you click a topic,
            you will see the messages for that topic in the middle panel. On the
            right panel, you will see all logged in users before you choose a
            topic. Once you are in a topic room, the right panel will only show
            who is also in that room. You can click a user's name to create a
            private chat. This chat can be found below the main topic room list
            under "Direct Messages". Just click the newly created chat room that
            contains your user name and the user you clicked on to enter a
            private chat space for the two of you to talk.
          </p>
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
          <h1 style={{ margin: "1rem" }}>Login to Eagle Chat</h1>
          <form style={{ margin: "1rem" }} onSubmit={nameHandler}>
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
                  onChange={e => setName(e.target.value.replace(",", ""))}
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
