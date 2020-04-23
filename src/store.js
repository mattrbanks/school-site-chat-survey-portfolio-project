import React from "react"
import io from "socket.io-client"
import { userName } from "./pages/chat"
import { userType } from "./pages/chat"
//import useForceUpdate from "use-force-update"

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

let topicHolder = []

function sendActiveTopicSocket(value) {
  let tempValue = value
  console.log(value)
  console.log(tempValue)
  topicHolder.length = 0
  topicHolder.push(tempValue)
  socket.emit("active-topic-socket", value) //we send activeTopic object up to server
  console.log(topicHolder)
}

const Store = props => {
  const [allChats, dispatch] = React.useReducer(reducer, initState)
  console.log(allChats)

  const [updateChat, setUpdateChat] = React.useState(0)
  console.log(updateChat)

  //const forceUpdate = useForceUpdate()

  // this is where socket changes before we even call the function above, when the socket is created.
  if (!socket) {
    socket = io(":3001") //created client connection that connects when the client starts if no sockets are started.

    const name = [userName.toString(), "-" + userType.toString()]
    socket.emit("new-user", name) //kick name to server

    socket.on("chat message", msg => {
      console.log(msg)
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg })
    })
  }
  let usersListC = []
  let usersTopicsListC = {
    general: [], //these are the userList for that topic
    topic2: [],
  }
  console.log(usersTopicsListC)

  socket.on("new-user", users => {
    console.log(users)

    usersListC.length = 0
    for (let i = 0; i < users.length; i++) {
      usersListC.push(users[i])
    }
  })

  socket.on("active-topic-socket", topic => {
    console.log(topic)

    usersTopicsListC.general.length = 0
    usersTopicsListC.topic2.length = 0
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].topic === "general") {
        usersTopicsListC.general.push(topic[i])
      } else if (topic[i].topic === "topic2") {
        usersTopicsListC.topic2.push(topic[i])
      }
    }
  })

  // function appendMessage(value) {
  //   //add to allChats object
  //   allChats[value.topic].push(value)
  // }

  socket.on("user-disconnected", nameAndTopic => {
    //const abortController = new AbortController()
    console.log(nameAndTopic)
    if (nameAndTopic.topic.length === 0) {
      return
    } else {
      // appendMessage({
      //   from: nameAndTopic.from,
      //   msg: "DISCONNECTED",
      //   topic: nameAndTopic.topic,
      // })
      setUpdateChat(Math.random())
      // return () => {
      //   abortController.abort()
      // }
    }
  })

  /*here we are passing in an object with key allChats with the value of our current
   state coming from our reducer. This gives us the ability to pass in more stuff like
   our action that is going to emit to our reducer*/

  return (
    <div>
      <context.Provider
        value={{
          allChats,
          topicHolder,
          sendChatAction,
          updateChat,
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
