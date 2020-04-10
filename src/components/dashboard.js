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

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    textAlign: "center",
    padding: theme.spacing(3, 2),
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
  const { allChats, sendChatAction } = React.useContext(context)

  const topics = Object.keys(allChats)

  console.log({ topics })

  // local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0])
  const [textValue, changeTextValue] = React.useState("")

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

  return (
    <Paper className={classes.root} elevation={3}>
      <h2>Chat app</h2>
      <h5>{activeTopic}</h5>
      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {topics.map(topic => (
              <ListItem
                onClick={e => changeActiveTopic(e.target.innerText)}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </div>
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
          <UsersTopicsList allChats={allChats} />
        </div>
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
