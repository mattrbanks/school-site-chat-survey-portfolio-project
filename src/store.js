import React from "react"
import io from "socket.io-client"
//import { activeTopic } from "./components/dashboard"
import { userName } from "./pages/chat"
import { userType } from "./pages/chat"

export const context = React.createContext()

const initState = {
  general: [], //these are allChats
  topic2: [],
}

function reducer(state, action) {
  const { from, msg, topic } = action.payload
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }],
      }
    default:
      return state
  }
}

/* to initialize this socket a variable called socket is declared
 outside of the functional component because we don't want this to
  re-render every time the store reloads */
let socket //we define socket above the function below

/* there is a closure in this function that captures the value of socket in the context
 of this function even if it changes below. we are emitting in the dashboard component but
  the socket variable was captured all the way up here when the function was defined. 
  So functions that are not arguments are captured from the context of the function
  definition while functions that are arguments are not captured until the call,
  when they are actually invoked. variables in functions can be captured either way.*/
function sendChatAction(value) {
  socket.emit("send chat message", value) //we send message object up to server
}

function sendActiveTopicSocket(value) {
  socket.emit("active-topic-socket", value) //we send activeTopic object up to server
}

const Store = props => {
  const [allChats, dispatch] = React.useReducer(reducer, initState)
  console.log(allChats)

  // this is where socket changes before we even call the function above, when the socket is created.
  if (!socket) {
    socket = io(":3001") //created client connection that connects when the client starts if no sockets are started.
    console.log(socket)

    const name = [userName.toString(), "-" + userType.toString()]
    socket.emit("new-user", name) //kick name to server
    console.log(name)

    socket.on("chat message", msg => {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg })
    })
  }
  let usersListC = []
  console.log(usersListC)
  let usersTopicsListC = []
  console.log(usersTopicsListC)

  socket.on("new-user", users => {
    console.log(users)
    console.log(users.userNames)
    console.log(Object.values(users))
    console.log(Object.keys(users))
    console.log(usersListC)

    usersListC.length = 0
    for (let i = 0; i < users.length; i++) {
      usersListC.push(users[i])
    }
    console.log(usersListC)
  })

  socket.on("active-topic-socket", topic => {
    usersTopicsListC.length = 0
    for (let i = 0; i < topic.length; i++) {
      usersTopicsListC.push(topic[i])
    }
    console.log(usersTopicsListC)
  })

  console.log(allChats)
  function appendMessage(value1, value2) {
    //add to allChats object
    allChats.general.push(value1)
    allChats.topic2.push(value2)
  }
  console.log(allChats.general)

  socket.on("user-disconnected", name => {
    appendMessage(
      {
        from: name,
        msg: "DISCONNECTED",
        topic: "general",
      },
      {
        from: name,
        msg: "DISCONNECTED",
        topic: "topic2",
      }
    )
  })

  /*here we are passing in an object with key allChats with the value of our current
   state coming from our reducer. This gives us the ability to pass in more stuff like
   our action that is going to emit to our reducer*/

  return (
    <div>
      <context.Provider
        value={{
          allChats,
          sendChatAction,
          usersListC,
          usersTopicsListC,
          sendActiveTopicSocket,
        }}
      >
        {props.children}
      </context.Provider>
    </div>
  )
}

export default Store
