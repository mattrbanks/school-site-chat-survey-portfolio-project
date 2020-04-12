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
import axios from "axios"

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
    sendChatAction,
    sendActiveTopicSocket,
    usersTopicsListC,
  } = React.useContext(context)
  console.log(usersTopicsListC)
  console.log(allChats)

  const topics = Object.keys(allChats)

  console.log({ topics })

  // local state
  const [activeTopic, changeActiveTopic] = React.useState("")
  const [textValue, changeTextValue] = React.useState("")

  //const initialTopic = usersTopicsListC
  const [newTopicPicked, setNewTopic] = React.useState(usersTopicsListC)
  console.log(newTopicPicked)
  // const currentActiveTopic = {
  //   activeTopic,
  // }

  React.useEffect(() => {
    sendChatAction({
      from: "",
      msg: "CONNECTED",
      topic: "general",
    })
    sendChatAction({
      from: "",
      msg: "CONNECTED",
      topic: "topic2",
    })
  }, [])

  // React.useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/activeTopic", currentActiveTopic)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [activeTopic])

  React.useEffect(() => {
    // axios
    //   .post("http://localhost:3001/activeTopic", activeTopic)
    //   .then(response => {
    //     console.log(response)
    //     console.log(JSON.stringify(response.data))
    //     //       initialTopic.length = 0
    //     console.log(response.data)
    //     //       initialTopic.push(response.data)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // fire function from context
    //console.log(activeTopic)

    console.log("We sent the activeTopic to server 2nd")
    sendActiveTopicSocket(activeTopic)

    //setNewTopic(usersTopicsListC)
  }, [activeTopic])

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     console.log("render")
  //     forceUpdateHandler()
  //   }) //slight delay in timing of setState method after initial render runs
  // }, [activeTopic])

  function forceUpdateHandler() {
    setTimeout(() => {
      console.log("We update state of activeTopic 3rd")
      setNewTopic(usersTopicsListC) //need re-render here
      console.log(usersTopicsListC)
    }, 2000)
  }

  // React.useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/activeTopic", currentActiveTopic)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [activeTopic])

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
                  forceUpdateHandler()
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
              <UsersList allChats={allChats} />
            </div>
            <div className={classes.usersTopicWindow}>
              <List>
                {newTopicPicked.map((topic, i) => (
                  <ListItem
                    //onClick={e => goToDirMessage(e.target.innerText)}
                    key={topic[0]}
                  >
                    <ListItemText
                      className={classes.multiline}
                      primary={topic[1]}
                      secondary={"-Topic"}
                    />
                  </ListItem>
                ))}
              </List>
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
            <div className={classes.usersTopicWindow}>
              <UsersTopicsList activeTopic={activeTopic} />
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
