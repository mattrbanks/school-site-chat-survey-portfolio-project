import React from "react"
import io from "socket.io-client"
import { userName } from "./pages/chat"
import { userType } from "./pages/chat"
//import useForceUpdate from "use-force-update"

export const context = React.createContext()

const initState = {
  Kindergarten: [], //these are allChats
  First: [],
  Second: [],
  Third: [],
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

const privInitState = {}

function reducerPriv(state, action) {
  const { from, msg, topic } = action.payload
  switch (action.type) {
    case "SET_PRIVATE_MESSAGE_STATE":
      return { ...state, [action.payload.users]: [] }
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
    privInitState
  )
  console.log(privChatList)

  const privChatListCopy = React.useRef(privInitState)
  console.log(privChatListCopy)

  const [updateChat, setUpdateChat] = React.useState(0)
  console.log(updateChat)

  const [msgTopic, setMsgTopic] = React.useState("")
  console.log(msgTopic)

  //const forceUpdate = useForceUpdate()

  React.useEffect(() => {
    privChatListCopy.current = privChatList
  }, [privChatList])

  // this is where socket changes before we even call the function above, when the socket is created.
  if (!socket) {
    socket = io("https://school-site-chat-survey-server.herokuapp.com/") //created client connection that connects when the client starts if no sockets are started. Added a heroku server. Used to be :3001.
    //socket = io(":3001") //just used for push notification tests

    const name = [userName.toString(), "-" + userType.toString()]
    socket.emit("new-user", name) //kick name to server

    socket.on("chat message", msg => {
      console.log(msg)
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg })
    })

    socket.on("private chat message", msg => {
      console.log(msg)
      dispatchPrivChat({
        type: "RECEIVE_PRIVATE_MESSAGE",
        payload: msg,
      })
      setMsgTopic(msg.topic)
      console.log(msgTopic)
    })

    socket.on("private web push notification", msg => {
      console.log(msg)
      console.log(topicHolder)
      console.log(typeof topicHolder[0].topic)
      console.log(typeof msg.topic)

      fetch(
        "https://school-site-chat-survey-server.herokuapp.com/activeTopic",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: msg,
          }),
        }
      )

      const publicVapidKey =
        "BOBgli7IFwPg3i3nvW4aDscd1J0Ro7IdpYCOtp9AGQSCzzITlDk3svksQKzlgAlvTLIJifKCBOIfbPRlqDE3gLM"

      // Check for service worker
      if ("serviceWorker" in navigator) {
        send().catch(err => console.log(err))
      }

      // Register SW, Register Push, Send Push
      async function send() {
        // Register Service Worker
        console.log("Registering service worker...")
        const register = await navigator.serviceWorker.register(
          "../service-worker.js",
          {
            scope: "/",
          }
        )
        console.log("Service Worker Registered...")

        // Register Push
        console.log("Registering Push...")
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        })
        console.log("Push Registered...")

        // Send Push Notification
        console.log("Sending Push...")
        topicHolder[0].topic === msg.topic
          ? console.log("Push Not Sent While Receiver Is In Room...")
          : await fetch(
              "https://school-site-chat-survey-server.herokuapp.com/subscribe",
              {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                  "content-type": "application/json",
                },
              }
            )
        console.log("Push Sent...") //disregard if receiver is in room
      }

      function urlBase64ToUint8Array(base64String) {
        const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
        const base64 = (base64String + padding)
          .replace(/\-/g, "+")
          .replace(/_/g, "/")

        const rawData = window.atob(base64)
        const outputArray = new Uint8Array(rawData.length)

        for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i)
        }
        return outputArray
      }
    })

    socket.on("private message", newChat => {
      //array work on newChat.users to check privChatList for duplicates, avoid 2 priv msg, and also get rid of commas

      let newChatFwd = newChat.users
        .slice()
        .flat()
        .toString()

      let newChatBwd = newChat.users
        .slice()
        .reverse()
        .flat()
        .toString()

      let privKeys = Object.keys(privChatListCopy.current)

      for (const key of privKeys) {
        console.log(key)
      }

      if (privKeys.length === 0) {
        dispatchPrivChat({
          type: "SET_PRIVATE_MESSAGE_STATE",
          payload: newChat,
        })
      } else if (privKeys.length > 0) {
        for (const key of privKeys) {
          if (key === newChatFwd) {
            return console.log("it matches Fwd!")
          } else if (key === newChatBwd) {
            return console.log("it matches Bwd!")
          } else {
            dispatchPrivChat({
              type: "SET_PRIVATE_MESSAGE_STATE",
              payload: newChat,
            })
          }
        }
      }
    })
  }
  let usersListC = []
  let usersTopicsListC = {
    Kindergarten: [], //these are the userList for that topic
    First: [],
    Second: [],
    Third: [],
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

    usersTopicsListC.Kindergarten.length = 0
    usersTopicsListC.First.length = 0
    usersTopicsListC.Second.length = 0
    usersTopicsListC.Third.length = 0
    for (let i = 0; i < topic.length; i++) {
      if (topic[i].topic === "Kindergarten") {
        usersTopicsListC.Kindergarten.push(topic[i])
      } else if (topic[i].topic === "First") {
        usersTopicsListC.First.push(topic[i])
      } else if (topic[i].topic === "Second") {
        usersTopicsListC.Second.push(topic[i])
      } else if (topic[i].topic === "Third") {
        usersTopicsListC.Third.push(topic[i])
      }
    }
  })

  socket.on("user-disconnected", nameAndTopic => {
    //try putting this in the same scope as "chat message" to see if the duplicates go away.
    console.log(nameAndTopic)
    if (nameAndTopic.topic.length === 0) {
      return
    } else {
      setUpdateChat(Math.random())
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
          topicHolder,
          sendChatAction,
          sendPrivateAction,
          updateChat,
          setUpdateChat,
          usersListC,
          usersTopicsListC,
          sendActiveTopicSocket,
          sendPrivateMessage,
          msgTopic,
        }}
      >
        {props.children}
      </context.Provider>
    </div>
  )
}

export default Store
