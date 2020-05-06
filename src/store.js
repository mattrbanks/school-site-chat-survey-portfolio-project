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

const PrivInitState = {}

function reducerPriv(state, action) {
  const { from, msg, topic } = action.payload
  switch (action.type) {
    case "RECEIVE_PRIVATE_MESSAGE":
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

function sendPrivateAction(privateValue) {
  socket.emit("send private chat message", privateValue)
}

function sendPrivateMessage(receiver) {
  socket.emit("private message", receiver)
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

  const [privChatList, dispatchPrivChat] = React.useReducer(
    reducerPriv,
    PrivInitState
  )
  console.log(privChatList)

  const [updateChat, setUpdateChat] = React.useState(0)
  console.log(updateChat)

  // const [privChatList, setPrivChatList] = React.useState([]) //[{`${receiver}&${sender}`: [{},{}]}, {`${receiver}&${sender}`: [{},{}]}]
  // console.log(privChatList)

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

    socket.on("private chat message", msg => {
      console.log(msg)
      dispatchPrivChat({ type: "RECEIVE_PRIVATE_MESSAGE", payload: msg })
    })

    socket.on("private message", newChat => {
      // console.log(newChat)
      // console.log(newChat.users.flat().toString())
      // console.log(
      //   newChat.users
      //     .reverse()
      //     .flat()
      //     .toString()
      // )
      // console.log(
      //   newChat.users
      //     .flat()
      //     .sort()
      //     .toString()
      // )
      // console.log(
      //   newChat.users
      //     .reverse()
      //     .flat()
      //     .sort()
      //     .toString()
      // )
      //array work on newChat.users to check privChatList for duplicates, avoid 2 priv msg, and also get rid of commas
      let newChatFwd = newChat.users.flat().toString()
      let newChatBwd = newChat.users
        .reverse()
        .flat()
        .toString()
      // console.log(newChatFwd)
      // console.log(newChatBwd)

      if (newChatFwd in privChatList) {
        return console.log("it matches!")
      } else if (newChatBwd in privChatList) {
        return console.log("it matches!")
      } else {
        privChatList[newChat.users] = []
      }

      //privChatList[newChat.name] = []
      //privChatList[newChat.users] = []
      //privChatList.push(newChat)
      // console.log(privChatList)
      // console.log(Object.keys(privChatList))
      //console.log(Object.keys(privChatList).forEach(chat => console.log(chat)))
      //allChats[newChat.name] = []
      //console.log(allChats)
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
    //try putting this in the same scope as "chat message" to see if the duplicates go away.
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
          privChatList,
          //setPrivChatList,
          topicHolder,
          sendChatAction,
          sendPrivateAction,
          updateChat,
          setUpdateChat,
          usersListC,
          usersTopicsListC,
          sendActiveTopicSocket,
          sendPrivateMessage,
        }}
      >
        {props.children}
      </context.Provider>
    </div>
  )
}

export default Store
