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
import useForceUpdate from "use-force-update"
//import axios from "axios"
import ScrollableFeed from "react-scrollable-feed"
import Badge from "@material-ui/core/Badge"
import styled from "styled-components"
//import Switch from "@material-ui/core/Switch"
//import FormControlLabel from "@material-ui/core/FormControlLabel"

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
    //width: "30%",
    height: "17rem",
    borderLeft: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
    display: "flex",
    alignItems: "left",
  },
  usersWindowPreTopic: {
    //width: "30%",
    height: "18.75rem",
    borderLeft: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
    display: "flex",
    alignItems: "left",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
    height: "3.5rem",
  },
  badgeStyles: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    textAlign: "left",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiBadge-root": {
      marginRight: theme.spacing(4),
    },
  },
  textColorMsg: {
    color: "red",
  },
}))

const Dashboard = () => {
  const classes = useStyles()

  const textColorMsgClass = classes.textColorMsg

  const [invisible, setInvisible] = React.useState(true)

  const handleBadgeVisibility = () => {
    // setInvisible(!invisible)
    setInvisible(false)
  }

  // context Store
  const {
    allChats,
    privChatList,
    sendChatAction,
    sendPrivateAction,
    sendActiveTopicSocket,
    sendPrivateMessage,
    updateChat,
    usersTopicsListC,
    usersListC,
    msgTopic,
  } = React.useContext(context)
  console.log(usersTopicsListC)
  console.log(allChats)
  console.log(updateChat)
  console.log(privChatList)
  console.log(msgTopic)

  const topics = Object.keys(allChats)
  console.log(topics)

  const privTopics = Object.keys(privChatList)
  console.log(privTopics)

  const privTopicsBool = { ...privChatList }
  console.log(privTopicsBool)

  const createPrivTopicSwitch = function(obj) {
    Object.keys(obj).forEach(function(key) {
      obj[key] = false
    })
    return obj
  }

  const [privTopicsEntriesState, setPrivTopicsEntriesState] = React.useState(
    Object.entries(privChatList) //new!
  )
  console.log(privTopicsEntriesState)

  let privTopicsEntries = Object.entries(privChatList)
  console.log(privTopicsEntries)

  const forceUpdate = useForceUpdate()

  // local state
  const [activeTopic, changeActiveTopic] = React.useState("")
  const [textValue, changeTextValue] = React.useState("")
  console.log(activeTopic)

  const initialTopic = usersTopicsListC
  const [usersInTopic, setNewTopic] = React.useState(initialTopic)
  console.log(usersInTopic)

  const initialUsers = usersListC
  const [allTheUserNames, setUserNames] = React.useState(initialUsers)
  console.log(allTheUserNames)

  const [dashIsMounted, setDashboardBoolean] = React.useState(false)
  const [didMount, setDidMount] = React.useState(false)
  const [updateNow, setUpdateNow] = React.useState(false)
  const [receiverMount, setReceiverMount] = React.useState(false)
  const [privChatMount, setPrivChatMount] = React.useState(0) //use for now until something better.
  const [privChatActive, setPrivChatActive] = React.useState(null)
  const [privChatActiveNoComma, setPrivChatActiveNoComma] = React.useState(null)
  const [privNotifyOn, setPrivNotifyOn] = React.useState(false)
  const [userListSwitch, setUserListSwitch] = React.useState(false)
  console.log(privChatActive)
  console.log(typeof privChatActive)

  const [receiver, setReceiver] = React.useState("")

  const [privChatColor, setPrivChatColor] = React.useState("red")

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
      if (privChatActive === null) {
        sendChatAction({
          from: "",
          msg: "JOINED",
          topic: activeTopic,
        })
      }
      setTimeout(function() {
        setNewTopic(usersInTopic => {
          return { ...usersInTopic, ...usersTopicsListC }
        })
      }, 500)

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
    console.log(receiver)
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

  React.useEffect(() => {
    //if (!privChatActive && privNotifyOn) {
    if (!privChatActive && privNotifyOn) {
      handleBadgeVisibility()
    } else {
      setPrivNotifyOn(true)
    }
  }, [privChatList])

  React.useEffect(() => {
    if (privChatActive === activeTopic) {
      setPrivChatActiveNoComma(privChatActive.replace(/,/g, ""))
      console.log(privChatList[activeTopic].length)
      console.log(privChatActive.replace(/,/g, ""))
    }
  }, [activeTopic])

  function privTopicClick() {
    //for(let i = 0; )
    setPrivChatColor("black")
  }

  // function userWasClickedForPrivMsg() {
  //   privTopicsBool = Object.keys(privChatList).forEach(function(key) {
  //     privChatList[key] = false
  //   })

  //   // for (let i = 0; i < privTopics.length; i++) {
  //   //   privTopicsBool.push([])
  //   // }
  //   // for (let i = 0; i < privTopics.length; i++) {
  //   //   privTopicsBool[0].push(privTopics[i])
  //   // }
  // }

  //&& subarray.indexOf(privTopic) + 1 === 1

  React.useEffect(() => {
    createPrivTopicSwitch(privTopicsBool)
    console.log(privTopicsBool)
    console.log(privChatList)
    console.log(msgTopic)
    privTopicsEntries = Object.entries(privTopicsBool)
    console.log(privTopicsEntries)
    privTopicsEntries.map(function(subarray) {
      return subarray.map(function(privTopic) {
        return msgTopic === privTopic && privTopic === privTopicsEntries[0][0]
          ? (privTopicsEntries[0][1] = true)
          : ""
      })
    })
    setPrivTopicsEntriesState(oldState => {
      return { ...oldState, ...privTopicsEntries }
    })
    console.log(privTopicsEntries)
    // setTimeout(function() {
    //   console.log(privTopicsBool)
    // }, 1000)
  }, [privChatList]) //this works but I need update. Not turning red.

  React.useEffect(() => {
    console.log(privTopicsEntries)
  }, [msgTopic])

  // React.useEffect(() => {
  //   setPrivChatColor("red")
  // //   for (let i = 0; i < privTopics.length; i++) {
  // //     privTopicsBool.push(privTopics[i])
  // //   }
  // }, [privChatList])

  return (
    <Paper className={classes.root} elevation={3}>
      <h2>Eagle Chat</h2>
      <h5>{privChatActive !== null ? privChatActiveNoComma : activeTopic}</h5>

      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {topics.map(topic => (
              <ListItem
                onClick={e => {
                  changeActiveTopic(e.target.innerText)
                  setPrivChatActive(null)
                  privTopicClick()
                  console.log("We clicked the topic we want 1st")
                }}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
          <Badge
            color="secondary"
            variant="dot"
            invisible={invisible}
            //className={classes.badgeStyles}
          >
            <p>Direct Messages</p>
          </Badge>
          <List className={classes.badgeStyles}>
            {privTopicsEntries.map((privTopic, i) => (
              //<Badge color="secondary" variant="dot" invisible={invisible}>

              <ListItem
                //className={msgTopic === privTopic ? "text-color" : ""}
                onClick={e => {
                  changeActiveTopic(e.target.innerText)
                  setPrivChatActive(e.target.innerText)
                  setInvisible(true)
                  privTopicClick()
                  console.log("Here it is! " + privTopicsEntries)
                }}
                key={privTopic[0]}
                button
              >
                <PrivTextBold>
                  <ListItemText
                    //style={{ color: "red" }}
                    //className={textColorMsgClass}
                    className={privTopic[1] == true ? textColorMsgClass : ""}
                    primary={privTopic[0]}
                  />
                </PrivTextBold>
              </ListItem>

              //</Badge>
            ))}
          </List>
          {/* <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={!invisible}
                onChange={handleBadgeVisibility}
              />
            }
            label="Show Badge"
          /> */}
        </div>
        {activeTopic ? (
          privChatActive !== null ? (
            <>
              <div className={classes.chatWindow}>
                <ScrollableFeed>
                  {privChatList[activeTopic].map((chat, i) => (
                    <div className={classes.flex} key={i}>
                      <Chip label={chat.from} className={classes.chip} />
                      <h5>{chat.msg}</h5>
                    </div>
                  ))}
                </ScrollableFeed>
              </div>
            </>
          ) : (
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
              <div>
                <button
                  onClick={() => {
                    setUserListSwitch(!userListSwitch)
                  }}
                >
                  Toggle UserList
                </button>
                {userListSwitch ? (
                  // <p className={classes.usersWindow}>why</p>
                  // <div className={classes.usersWindow}>
                  //   <UsersList userListSwitch={userListSwitch} />
                  // </div>
                  <div className={classes.usersWindow}>
                    <List>
                      {allTheUserNames.map((name, i) => (
                        <ListItem
                          //onClick={e => goToDirMessage(e.target.innerText)}
                          key={name[0]}
                          button
                          onClick={() => {
                            setReceiver({ from: name[1], id: name[0] })
                            setTimeout(function() {
                              setPrivChatMount(Math.random())
                            }, 500)
                            //userWasClickedForPrivMsg()
                          }}
                        >
                          <ListItemText
                            className={classes.multiline}
                            primary={name[1][0]}
                            secondary={name[1][1] + name[1][2]}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                ) : (
                  <div className={classes.usersWindow}>
                    <List>
                      {usersInTopic[activeTopic].map((topic, i) => (
                        <ListItem
                          key={topic.id}
                          button
                          onClick={() => {
                            setReceiver(oldState => {
                              return { ...oldState, ...topic }
                            })
                            setTimeout(function() {
                              setPrivChatMount(Math.random())
                            }, 500)
                            //userWasClickedForPrivMsg()
                          }}
                        >
                          <ListItemText primary={topic.from} />
                        </ListItem>
                      ))}
                    </List>
                  </div>
                )}
              </div>
            </>
          )
        ) : (
          <>
            <div className={classes.joinWindow}>
              <div>&larr; Welcome! Choose a topic to start chatting.</div>
            </div>
            <div className={classes.usersWindowPreTopic}>
              <UsersList allChats={allChats} />
            </div>
          </>
        )}
      </div>
      {privChatActive !== null ? (
        <form
          className={classes.flex}
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <TextField
            id="outlined-basic"
            label="Send a private message"
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
              sendPrivateAction({
                from: "",
                msg: textValue,
                topic: activeTopic,
              })
              //setPrivChatColor("red")
              changeTextValue("")
            }}
          >
            Send
          </Button>
        </form>
      ) : (
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
      )}
    </Paper>
  )
}

export default Dashboard

const PrivTextBold = styled.div`
  .text-color-R {
    color: ${prop => (prop.notify ? "red" : "black")};
  }
  .text-color-B {
    color: black;
  }
  .text-color {
    color: red;
  }
`
