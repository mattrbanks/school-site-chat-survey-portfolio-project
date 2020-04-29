import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { context } from "../store"
import UsersList from "./Server/utils/usersList"
import UsersTopicsList from "./Server/utils/usersTopicsList"
//import UsersTopicsListActive from "./Server/utils/usersTopicsListActive"
import useForceUpdate from "use-force-update"
//import axios from "axios"
import ScrollableFeed from "react-scrollable-feed"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    textAlign: "center",
    padding: theme.spacing(3, 2),
  },
  multiline: {
    display: "flex",
  },
  flex: {
    display: "flex",
    alignItems: "left",
  },
  topicsWindow: {
    width: "30%",
    height: "18.75rem",
    borderRight: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  chatWindow: {
    width: "50%",
    height: "17.5rem",
    padding: "1.25rem",
    //overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  joinWindow: {
    width: "50%",
    height: "18.75rem",
    padding: "1.25rem",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  usersWindow: {
    width: "30%",
    height: "18.75rem",
    borderLeft: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  usersTopicWindow: {
    width: "30%",
    height: "18.75rem",
    borderLeft: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
    height: "3.5rem",
  },
}))

const Dashboard = () => {
  const classes = useStyles()

  // context Store
  const {
    allChats,
    privChat,
    setPrivChat,
    sendChatAction,
    sendActiveTopicSocket,
    sendPrivateMessage,
    updateChat,
    usersTopicsListC,
  } = React.useContext(context)
  console.log(usersTopicsListC)
  console.log(allChats)
  console.log(updateChat)
  console.log(privChat)

  const topics = Object.keys(allChats)

  const forceUpdate = useForceUpdate()

  // local state
  const [activeTopic, changeActiveTopic] = React.useState("")
  const [textValue, changeTextValue] = React.useState("")
  console.log(activeTopic)

  const initialTopic = usersTopicsListC
  const [usersInTopic, setNewTopic] = React.useState(initialTopic)
  console.log(usersInTopic)

  const [dashIsMounted, setDashboardBoolean] = React.useState(false)
  const [didMount, setDidMount] = React.useState(false)
  const [updateNow, setUpdateNow] = React.useState(false)
  const [receiverMount, setReceiverMount] = React.useState(false)
  const [privChatMount, setPrivChatMount] = React.useState(0) //use for now until something better.
  //const [privChatMount, setPrivChatMount] = React.useState(false)

  const [receiver, setReceiver] = React.useState("")

  React.useEffect(() => {
    setTimeout(function() {
      setDashboardBoolean(true)
    }, 500)
  }, [])

  React.useEffect(() => {
    const abortController = new AbortController()
    console.log(activeTopic)
    sendActiveTopicSocket({
      from: "",
      topic: activeTopic,
      id: "",
    })
    return () => {
      abortController.abort()
    }
  }, [activeTopic])

  React.useEffect(() => {
    const abortController = new AbortController()
    console.log(activeTopic)
    if (didMount) {
      sendChatAction({
        from: "",
        msg: "JOINED",
        topic: activeTopic,
      })
      setNewTopic(usersInTopic => {
        return { ...usersInTopic, ...usersTopicsListC }
      })

      return () => {
        abortController.abort()
      }
    } else {
      setDidMount(true)
    }
  }, [activeTopic])

  React.useEffect(() => {
    if (updateNow) {
      setTimeout(function() {
        setNewTopic(usersInTopic => {
          return { ...usersInTopic, ...usersTopicsListC }
        })
      }, 500)
    } else {
      setUpdateNow(true)
    }
  }, [updateChat])

  React.useEffect(() => {
    const abortController = new AbortController()
    if (receiverMount) {
      sendPrivateMessage(receiver)
      return () => {
        abortController.abort()
      }
    } else {
      setReceiverMount(true)
    }
  }, [receiver])

  // React.useEffect(() => {
  //   const abortController = new AbortController()
  //   console.log(activeTopic)
  //   if (privChatMount) {
  //     setPrivChat(privChatOld => {
  //       return { ...privChatOld, ...privChat }
  //     })
  //     return () => {
  //       abortController.abort()
  //     }
  //   } else {
  //     setPrivChatMount(true)
  //   }
  // }, [privChat])

  return (
    <Paper className={classes.root} elevation={3}>
      <h2>Eagle Chat</h2>
      <h5>{activeTopic}</h5>
      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {topics.map(topic => (
              <ListItem
                onClick={e => {
                  changeActiveTopic(e.target.innerText)
                  console.log("We clicked the topic we want 1st")
                }}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
          <p>Direct Messages</p>
          <List>
            {privChat.map((chat, i) => (
              <ListItem
                onClick={e => {
                  //changeActiveTopic(e.target.innerText)
                  console.log("We clicked the topic we want 1st")
                }}
                key={i}
                button
              >
                <ListItemText primary={chat.name} />
              </ListItem>
            ))}
          </List>
        </div>
        {activeTopic ? (
          <>
            <div className={classes.chatWindow}>
              <ScrollableFeed>
                {allChats[activeTopic].map((chat, i) => (
                  <div className={classes.flex} key={i}>
                    <Chip label={chat.from} className={classes.chip} />
                    <h5>{chat.msg}</h5>
                  </div>
                ))}
              </ScrollableFeed>
            </div>
            <div className={classes.usersWindow}>
              <List>
                {usersInTopic[activeTopic].map((topic, i) => (
                  <ListItem
                    key={topic.id}
                    button
                    onClick={e => {
                      setReceiver(oldState => {
                        return { ...oldState, ...topic }
                      })
                      setTimeout(function() {
                        //setPrivChat(privChat)
                        setPrivChatMount(Math.random())
                      }, 500)
                    }}
                  >
                    <ListItemText primary={topic.from} />
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <UsersTopicsList />
            </div>
          </>
        ) : (
          <>
            <div className={classes.joinWindow}>
              <div>&larr; Welcome! Choose a topic to start chatting.</div>
            </div>
            <div className={classes.usersWindow}>
              <UsersList allChats={allChats} />
            </div>
          </>
        )}
      </div>
      <form
        className={classes.flex}
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <TextField
          id="outlined-basic"
          label="Send a message"
          className={classes.chatBox}
          value={textValue}
          onChange={e => changeTextValue(e.target.value)}
          variant="outlined"
          disabled={!activeTopic}
        />
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            sendChatAction({
              from: "",
              msg: textValue,
              topic: activeTopic,
            })
            changeTextValue("")
          }}
        >
          Send
        </Button>
      </form>
    </Paper>
  )
}

export default Dashboard
