import React from "react"
import io from "socket.io-client"
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

const initTopic = {
  general: [], //these are the userList for that topic
  topic2: [],
}

function reducerTopic(state, action) {
  const payloadUsers = action.payload
  switch (action.type) {
    case "RECEIVE_TOPIC_USER_LIST":
      initTopic.general.length = 0
      initTopic.topic2.length = 0
      for (let i = 0; i < payloadUsers.length; i++) {
        if (payloadUsers[i].topic === "general") {
          initTopic.general.push(payloadUsers[i])
        } else if (payloadUsers[i].topic === "topic2") {
          initTopic.topic2.push(payloadUsers[i])
        }
      }
      return {
        ...state,
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

function sendChatLeftAction(value) {
  socket.emit("connected message", value) //we send message object up to server
}

function sendChatJoinedAction(value) {
  socket.emit("joined message", value) //we send message object up to server
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

  const [allTopics, dispatchTopic] = React.useReducer(reducerTopic, initTopic)
  console.log(allTopics)

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
    // console.log(topicCopy)
    // let topicCopy = topic
    // dispatchTopic({
    //   type: "RECEIVE_TOPIC_USER_LIST",
    //   payload: topic,
    // })

    usersTopicsListC.general.length = 0
    usersTopicsListC.topic2.length = 0
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].topic === "general") {
        usersTopicsListC.general.push(topic[i])
      } else if (topic[i].topic === "topic2") {
        usersTopicsListC.topic2.push(topic[i])
      }
    }

    // let reverseTopicsArr = topicCopy.reverse()
    // console.log(reverseTopicsArr)
    // console.log(reverseTopicsArr[0].from)
    // console.log(reverseTopicsArr[0].topic)
    // sendChatAction({
    //   from: reverseTopicsArr[0].from,
    //   msg: "JOINED",
    //   topic: reverseTopicsArr[0].topic,
    // })

    // usersTopicsListC.length = 0
    // for (let i = 0; i < topic.length; i++) {
    //   usersTopicsListC.push(topic[i])
    // }
    //console.log(usersTopicsListC)
  })

  socket.once("left message", msg => {
    console.log(msg)
    dispatch({ type: "RECEIVE_MESSAGE", payload: msg })
  })

  socket.once("joined message", msg => {
    console.log(msg)
    dispatch({ type: "RECEIVE_MESSAGE", payload: msg })
  })

  //console.log(allChats)
  function appendMessage(value1, value2) {
    //add to allChats object
    allChats.general.push(value1)
    allChats.topic2.push(value2)
  }
  //console.log(allChats.general)

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
          allTopics,
          topicHolder,
          sendChatAction,
          sendChatLeftAction,
          sendChatJoinedAction,
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
