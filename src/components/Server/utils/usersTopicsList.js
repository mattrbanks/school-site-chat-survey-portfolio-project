import React from "react"
import { context } from "../../../store"
// import { makeStyles } from "@material-ui/core/styles"
// import List from "@material-ui/core/List"
// import ListItem from "@material-ui/core/ListItem"
// import ListItemText from "@material-ui/core/ListItemText"
// import Chip from "@material-ui/core/Chip"

// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: "1rem",
//     textAlign: "center",
//     padding: theme.spacing(3, 2),
//   },
//   button: {
//     width: "15%",
//     height: "3.5rem",
//   },
// }))

const UsersList = props => {
  //const classes = useStyles()
  const {
    usersListC,
    usersTopicsListC,
    allTopics,
    sendChatAction,
    sendChatConnectAction,
  } = React.useContext(context)

  //console.log(usersListC)
  console.log(usersTopicsListC)

  //const initialUsers = usersListC
  //const [allTheUserNames, setUserNames] = React.useState(initialUsers)
  //console.log(allTheUserNames)

  //const [dashIsMounted, setDashboardBoolean] = React.useState(false)

  React.useEffect(() => {
    // setTimeout(function () {
    //   setDashboardBoolean(true)
    //   //forceUpdate()
    // }, 500)
    setTimeout(function() {
      sendChatConnectAction({
        from: "",
        msg: "CONNECTED",
        topic: "", //need active topic here instead
      })
    }, 500)
    //  sendChatAction({
    //    from: "",
    //    msg: "CONNECTED",
    //    topic: "topic2",
    //  })
  }, [])

  return <div>{/* Maybe we can return something useful here later */}</div>
}
export default UsersList
