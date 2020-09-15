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
    userName.push(name)
    userType.push(type)
    setName("")
    setLoginBoolean(true)
    setType("")
  }

  if (isLoggedIn === true) {
    return (
      <div>
        <SEO title="chat" />
        <div>
          <h1 style={{ margin: "1rem" }}>Welcome to Eagle Chat.</h1>
          <p style={{ margin: "1rem" }}>
            In the left panel, you have a number of topic rooms you can click on
            to enter. Just click your child's grade to enter a group discussion
            involving parents and teachers. Once you click a topic, you will see
            the messages for that topic in the middle (bottom for mobile) panel.
            On the right panel, you will see all logged in users before you
            choose a topic. Once you are in a topic room, the right panel will
            show who is also in that room or all the users who are logged in.
            You just need to click the button over the list to toggle the two
            lists. You can click a user's name to create a private chat. This
            chat can be found below the main topic room list under "Direct
            Messages". Just click the newly created chat room that contains your
            user name and the user you clicked on to enter a private chat space
            for the two of you to talk. If you are in another private chat or in
            a group chat then you will get a private message notification.
          </p>
          <Store>
            <Dashboard />
          </Store>
          <Link
            to="/"
            onClick="window.location.reload()"
            style={{ margin: "1rem" }}
          >
            BACK TO HOMEPAGE AND DISCONNECT
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <SEO title="chat" />
        <Layout>
          <h1 style={{ margin: "1rem" }}>Login to Eagle Chat</h1>
          <p style={{ margin: "1rem" }}>
            Eagle chat is a space for teachers and parents to discuss issues
            about students and how to find solutions to those issues. Please
            login and speak with one of our available teachers. We will be
            assigning strict time blocks to our teachers in the near future.
            Teachers will be regularly available throughout the work week. We
            have plans to make things more secure soon. Until then, give Eagle
            chat a try and share your concerns.
          </p>
          <form style={{ margin: "1rem" }} onSubmit={nameHandler}>
            <div>
              <div style={{ display: "block" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <span>*All items are required for login</span>
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                </div>
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
            <div style={{ display: "block" }}>
              <div style={{ marginTop: "1rem" }}>
                <label>Are you a parent or a teacher?</label>
              </div>
              <div>
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

                <label style={{ marginLeft: "1rem" }}>
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
              </div>
            </div>
            <button type="submit" value="Submit" style={{ marginTop: "1rem" }}>
              Submit Username
            </button>
          </form>
        </Layout>
      </div>
    )
  }
}

export default Chat
