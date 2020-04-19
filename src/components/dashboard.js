import React, { useEffect } from "react"
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
    height: "18.75rem",
    padding: "1.25rem",
    overflow: "auto",
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
    allTopics,
    //updateOrder,
    sendChatAction,
    sendActiveTopicSocket,
    sendChatJoinedAction,
    //sendChatLeftAction, //try this
    usersTopicsListC,
  } = React.useContext(context)
  console.log(usersTopicsListC)
  console.log(allChats)
  console.log(allTopics)
  //console.log(updateOrder)

  const topics = Object.keys(allChats)

  //console.log({ topics })

  //const userTopics = Object.keys(allTopics)
  const userTopics = Object.values(allTopics) //returns whatever is in the topics array
  //const userTopics = Object.entries(allTopics)

  console.log({ userTopics })

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

  // const initialUpdate = updateOrder
  // const [updateNow, setUpdateNow] = React.useState(initialUpdate)

  React.useEffect(() => {
    setTimeout(function() {
      setDashboardBoolean(true)
      //forceUpdate()
    }, 500)
  }, [])

  React.useEffect(() => {
    const abortController = new AbortController()
    console.log(activeTopic)
    sendActiveTopicSocket({
      from: "",
      topic: activeTopic,
    })
    return () => {
      abortController.abort()
    }
  }, [activeTopic])

  function setNewTopicHandler() {
    //alert("I will re-render now.")
    setTimeout(function() {
      setNewTopic(initialTopic => {
        // Object.assign would also work
        return { ...initialTopic, ...usersTopicsListC }
      })
      //forceUpdate()
    }, 500)
  }

  React.useEffect(() => {
    const abortController = new AbortController()
    console.log(activeTopic)
    if (didMount) {
      setTimeout(function() {
        sendChatJoinedAction({
          from: "",
          msg: "JOINED",
          topic: activeTopic,
        })
      }, 500) //was 600
      return () => {
        abortController.abort()
      }
    } else {
      setDidMount(true)
    }
  }, [activeTopic])

  // React.useEffect(() => {
  //   forceUpdate()
  //   // setUpdateNow(initialUpdate => {
  //   //   return { ...initialUpdate, ...updateOrder }
  //   // })
  // }, [updateNow])

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
                  //forceUpdateHandler()
                  //setNewTopicHandler(usersTopicsListC)
                  setNewTopicHandler()
                  // setTimeout(function() {
                  //   sendChatAction({
                  //     from: "",
                  //     msg: "JOINED",
                  //     topic: "general",
                  //   })
                  // }, 3000)
                }}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </div>
        {activeTopic ? (
          <>
            <div className={classes.chatWindow}>
              {allChats[activeTopic].map((chat, i) => (
                <div className={classes.flex} key={i}>
                  <Chip label={chat.from} className={classes.chip} />
                  <h5>{chat.msg}</h5>
                </div>
              ))}
            </div>
            <div className={classes.usersWindow}>
              <List>
                {usersInTopic[activeTopic].map((topic, i) => (
                  <ListItem key={i} button>
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
