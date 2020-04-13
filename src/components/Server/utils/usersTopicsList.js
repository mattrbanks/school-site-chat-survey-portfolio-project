import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    textAlign: "center",
    padding: theme.spacing(3, 2),
  },
  multiline: {
    display: "flex",
  },
  button: {
    width: "15%",
    height: "3.5rem",
  },
}))

const UsersTopicsList = props => {
  const classes = useStyles()

  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            className={classes.multiline}
            primary={"activeTopic"}
            secondary={"-Topic"}
          />
        </ListItem>
      </List>
    </div>
  )
}
export default UsersTopicsList
