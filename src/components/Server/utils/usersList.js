import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { context } from "../../../store"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    textAlign: "center",
    padding: theme.spacing(3, 2),
  },
  // multiline: {
  //   display: "flex",
  // },
  button: {
    width: "15%",
    height: "3.5rem",
  },
}))

const UsersList = props => {
  const classes = useStyles()
  const { usersListC } = React.useContext(context)
  console.log(props.allChats)

  // console.log({ usersListC })

  const initialUsers = usersListC
  const [allTheUserNames, setUserNames] = React.useState(initialUsers)
  //console.log(allTheUserNames)

  return (
    <div>
      <List>
        {allTheUserNames.map((name, i) => (
          <ListItem key={name[0]}>
            <ListItemText
              //className={classes.multiline}
              primary={name[1][0] + name[1][1] + name[1][2]}
              //secondary={name[1][1] + name[1][2]}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
export default UsersList
