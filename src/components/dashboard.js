import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme, useMediaQuery } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { context } from "../store"
import UsersList from "./Server/utils/usersList"
import ScrollableFeed from "react-scrollable-feed"
import Badge from "@material-ui/core/Badge"
import "emoji-mart/css/emoji-mart.css"
import { Picker } from "emoji-mart"
import ReactEmoji from "react-emoji"

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
    height: "17.5rem",
    padding: "1.25rem",
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
  topicsWindowMobile: {
    width: "50%",
    height: "18.75rem",
    borderBottom: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  topicsWindowPrivMobile: {
    width: "100%",
    height: "18.75rem",
    borderBottom: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  chatWindowMobile: {
    width: "100%",
    height: "17.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  joinWindowMobile: {
    width: "100%",
    height: "18.75rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
  },
  usersWindowMobileP: {
    width: "100%",
    height: "16.9rem",
    borderLeft: "0.0625rem solid grey",
    borderBottom: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
    display: "flex",
    alignItems: "left",
  },
  usersWindowMobileL: {
    width: "100%",
    marginRight: "6rem",
    height: "17rem",
    borderLeft: "0.0625rem solid grey",
    borderBottom: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
    display: "flex",
    alignItems: "left",
  },
  usersWindowPreTopicMobileP: {
    width: "100%",
    height: "18.75rem",
    borderLeft: "0.0625rem solid grey",
    borderBottom: "0.0625rem solid grey",
    overflow: "auto",
    overflowWrap: "break-word",
    wordWrap: "break-word", //IE legacy
    hyphens: "auto",
    textAlign: "left",
    display: "flex",
    alignItems: "left",
  },
  usersWindowPreTopicMobileL: {
    width: "100%",
    marginRight: "6rem",
    height: "18.75rem",
    borderLeft: "0.0625rem solid grey",
    borderBottom: "0.0625rem solid grey",
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
  getEmojiButton: {
    cssFloat: "right",
    border: "none",
    margin: 0,
    cursor: "pointer",
  },
  emojiPicker: {
    position: "absolute",
    bottom: 130,
    right: -22,
  },
  noBigScreenChatStyles: {
    display: "none",
  },
  noMobileChatStyles: {
    display: "none",
  },
  dashboardMobileStylesP: {
    display: "block",
  },
  dashboardMobileStylesL: {
    display: "block",
  },
  userListToggleStyles: {
    display: "none",
  },
}))

const Dashboard = () => {
  const classes = useStyles()
  const theme = useTheme()

  const getEmojiButtonClass = classes.getEmojiButton
  let emojiPickerClass = classes.emojiPicker

  const [invisible, setInvisible] = React.useState(true)

  const handleBadgeVisibility = () => {
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
  } = React.useContext(context)
  console.log(usersTopicsListC)
  console.log(usersListC)
  console.log(allChats)
  console.log(updateChat)
  console.log(privChatList)

  const topics = Object.keys(allChats)
  console.log(topics)

  const privTopics = Object.keys(privChatList)
  console.log(privTopics)

  let privTopicsEntries = Object.entries(privChatList)
  console.log(privTopicsEntries)

  // local state
  const [activeTopic, changeActiveTopic] = React.useState("")
  const [textValue, changeTextValue] = React.useState("")
  console.log(activeTopic)

  const [showEmojis, setShowEmojis] = React.useState(false)

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
  console.log(userListSwitch)
  console.log(privChatActive)
  console.log(typeof privChatActive)

  const [receiver, setReceiver] = React.useState("")

  const mobileChatP = useMediaQuery(
    `${theme.breakpoints.between("0", "500")} and (orientation: portrait)`
  )

  const mobileChatL = useMediaQuery(
    `${theme.breakpoints.between("0", "900")} and (orientation: landscape)`
  )

  //big screens
  const flexCSS = classes.flex
  const dashboardMobileCSSp = classes.dashboardMobileStylesP
  const dashboardMobileCSSl = classes.dashboardMobileStylesL

  //mobile
  const noMobileChatStylesCSS = classes.noMobileChatStyles
  const noBigScreenChatStylesCSS = classes.noBigScreenChatStyles
  const topicsWindowPrivMobileCSS = classes.topicsWindowPrivMobile
  const topicsWindowMobileCSS = classes.topicsWindowMobile
  const usersWindowMobileCSSl = classes.usersWindowMobileL
  const usersWindowMobileCSSp = classes.usersWindowMobileP
  const usersWindowPreTopicMobileCSSl = classes.usersWindowPreTopicMobileL
  const usersWindowPreTopicMobileCSSp = classes.usersWindowPreTopicMobileP

  //all screens
  const userListToggleStylesCSS = classes.userListToggleStyles

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

  function openEmojisMenu() {
    setShowEmojis(!showEmojis)
  }

  return (
    <Paper className={classes.root} elevation={3}>
      <h2>Eagle Chat</h2>
      <h5>{privChatActive !== null ? privChatActiveNoComma : activeTopic}</h5>

      <div
        className={
          mobileChatP
            ? noBigScreenChatStylesCSS
            : mobileChatL
            ? noBigScreenChatStylesCSS
            : flexCSS
        }
      >
        <div className={classes.topicsWindow}>
          <List>
            {topics.map(topic => (
              <ListItem
                onClick={e => {
                  changeActiveTopic(e.target.innerText)
                  setPrivChatActive(null)

                  console.log("We clicked the topic we want 1st")
                }}
                key={topic}
                button
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
          <Badge color="secondary" variant="dot" invisible={invisible}>
            <p style={{ marginBottom: "0" }}>Direct Messages</p>
          </Badge>
          <List className={classes.badgeStyles}>
            {privTopicsEntries.map((privTopic, i) => (
              <ListItem
                onClick={e => {
                  changeActiveTopic(e.target.innerText)
                  setPrivChatActive(e.target.innerText)
                  setInvisible(true)

                  console.log("Here it is! " + privTopicsEntries)
                  console.log(privTopic)
                }}
                key={privTopic[0]}
                button
              >
                <ListItemText primary={privTopic[0]} />
              </ListItem>
            ))}
          </List>
        </div>
        {activeTopic ? (
          privChatActive !== null ? (
            <>
              <div className={classes.chatWindow}>
                <ScrollableFeed>
                  {privChatList[activeTopic].map((chat, i) => (
                    <div className={classes.flex} key={i}>
                      <Chip label={chat.from} className={classes.chip} />
                      <h5>{ReactEmoji.emojify(chat.msg)}</h5>
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
                      <h5>{ReactEmoji.emojify(chat.msg)}</h5>
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
                  <span
                    className={
                      userListSwitch === true ? userListToggleStylesCSS : ""
                    }
                  >
                    All Users
                  </span>
                  <span
                    className={
                      userListSwitch === false ? userListToggleStylesCSS : ""
                    }
                  >
                    Room Users
                  </span>
                </button>
                {userListSwitch ? (
                  <div className={classes.usersWindow}>
                    <List>
                      {allTheUserNames.map((name, i) => (
                        <ListItem
                          key={name[0]}
                          button
                          onClick={() => {
                            setReceiver({ from: name[1], id: name[0] })
                            setTimeout(function() {
                              setPrivChatMount(Math.random())
                            }, 500)
                          }}
                        >
                          <ListItemText
                            primary={name[1][0] + name[1][1] + name[1][2]}
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
      <div
        className={
          mobileChatP
            ? dashboardMobileCSSp
            : mobileChatL
            ? dashboardMobileCSSl
            : noMobileChatStylesCSS
        }
      >
        <div className={flexCSS}>
          <div
            className={
              privChatActive !== null
                ? topicsWindowPrivMobileCSS
                : topicsWindowMobileCSS
            }
          >
            <List>
              {topics.map(topic => (
                <ListItem
                  onClick={e => {
                    changeActiveTopic(e.target.innerText)
                    setPrivChatActive(null)

                    console.log("We clicked the topic we want 1st")
                  }}
                  key={topic}
                  button
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
            <Badge color="secondary" variant="dot" invisible={invisible}>
              <p style={{ marginBottom: "0" }}>Direct Messages</p>
            </Badge>
            <List className={classes.badgeStyles}>
              {privTopicsEntries.map((privTopic, i) => (
                <ListItem
                  onClick={e => {
                    changeActiveTopic(e.target.innerText)
                    setPrivChatActive(e.target.innerText)
                    setInvisible(true)

                    console.log("Here it is! " + privTopicsEntries)
                    console.log(privTopic)
                  }}
                  key={privTopic[0]}
                  button
                >
                  <ListItemText primary={privTopic[0]} />
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            {activeTopic ? (
              privChatActive !== null ? (
                ""
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setUserListSwitch(!userListSwitch)
                    }}
                  >
                    <span
                      className={
                        userListSwitch === true ? userListToggleStylesCSS : ""
                      }
                    >
                      All Users
                    </span>
                    <span
                      className={
                        userListSwitch === false ? userListToggleStylesCSS : ""
                      }
                    >
                      Room Users
                    </span>
                  </button>
                  {userListSwitch ? (
                    <div
                      className={
                        mobileChatP
                          ? usersWindowMobileCSSp
                          : mobileChatL
                          ? usersWindowMobileCSSl
                          : ""
                      }
                    >
                      <List>
                        {allTheUserNames.map((name, i) => (
                          <ListItem
                            key={name[0]}
                            button
                            onClick={() => {
                              setReceiver({ from: name[1], id: name[0] })
                              setTimeout(function() {
                                setPrivChatMount(Math.random())
                              }, 500)
                            }}
                          >
                            <ListItemText
                              primary={name[1][0] + name[1][1] + name[1][2]}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  ) : (
                    <div
                      className={
                        mobileChatP
                          ? usersWindowMobileCSSp
                          : mobileChatL
                          ? usersWindowMobileCSSl
                          : ""
                      }
                    >
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
                            }}
                          >
                            <ListItemText primary={topic.from} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  )}
                </div>
              )
            ) : (
              <div
                className={
                  mobileChatP
                    ? usersWindowPreTopicMobileCSSp
                    : mobileChatL
                    ? usersWindowPreTopicMobileCSSl
                    : ""
                }
              >
                <UsersList allChats={allChats} />
              </div>
            )}
          </div>
        </div>
        <div>
          {activeTopic ? (
            privChatActive !== null ? (
              <>
                <div className={classes.chatWindowMobile}>
                  <ScrollableFeed>
                    {privChatList[activeTopic].map((chat, i) => (
                      <div className={classes.flex} key={i}>
                        <Chip label={chat.from} className={classes.chip} />
                        <h5>{ReactEmoji.emojify(chat.msg)}</h5>
                      </div>
                    ))}
                  </ScrollableFeed>
                </div>
              </>
            ) : (
              <div className={classes.chatWindowMobile}>
                <ScrollableFeed>
                  {allChats[activeTopic].map((chat, i) => (
                    <div className={classes.flex} key={i}>
                      <Chip label={chat.from} className={classes.chip} />
                      <h5>{ReactEmoji.emojify(chat.msg)}</h5>
                    </div>
                  ))}
                </ScrollableFeed>
              </div>
            )
          ) : (
            <div className={classes.joinWindowMobile}>
              <div>&uarr; Welcome! Choose a topic to start chatting.</div>
            </div>
          )}
        </div>
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
            disabled={!textValue}
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
      <div style={{ position: "relative" }}>
        {activeTopic ? (
          showEmojis ? (
            <React.Fragment>
              <span
                className={emojiPickerClass}
                ref={el => (emojiPickerClass = el)}
              >
                <Picker
                  onSelect={emoji => {
                    console.log(emoji)
                    changeTextValue(textValue + emoji.native)
                  }}
                  emojiTooltip={true}
                  title="Pick an emoji"
                  emoji="point_up"
                  set="google"
                />
              </span>
              <p
                className={getEmojiButtonClass}
                onClick={() => {
                  openEmojisMenu()
                }}
              >
                {String.fromCodePoint(0x1f60a)}
              </p>
            </React.Fragment>
          ) : (
            <p
              className={getEmojiButtonClass}
              onClick={() => {
                openEmojisMenu()
              }}
            >
              {String.fromCodePoint(0x1f60a)}
            </p>
          )
        ) : (
          ""
        )}
      </div>
    </Paper>
  )
}

export default Dashboard
