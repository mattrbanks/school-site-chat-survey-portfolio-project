import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Chip from "@material-ui/core/Chip"
import { context } from "../../../store"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    textAlign: "center",
    padding: theme.spacing(3, 2),
  },
  button: {
    width: "15%",
    height: "3.5rem",
  },
}))

const UsersList = props => {
  const classes = useStyles()
  const { usersListC, usersTopicsListC, allTopics } = React.useContext(context)

  console.log(usersListC)
  console.log(usersTopicsListC)

  const initialUsers = usersListC
  const [allTheUserNames, setUserNames] = React.useState(initialUsers)
  //console.log(allTheUserNames)

  return (
    <div>
      {/* {allTopics[activeTopic].map((users, i) => (
        <div className={classes.flex} key={i}>
          <Chip label={users.from} className={classes.chip} />
          <h5>{users.msg}</h5>
        </div>
      ))} */}
    </div>
  )
}
export default UsersList
