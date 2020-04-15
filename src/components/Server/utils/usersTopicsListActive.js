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
  multiline: {
    display: "flex",
  },
  button: {
    width: "15%",
    height: "3.5rem",
  },
}))

const UsersTopicsListActive = props => {
  const classes = useStyles()

  const { allTopics } = React.useContext(context)

  //console.log(allTopics)

  const userTopics = Object.values(allTopics)

  //console.log(userTopics)

  return (
    <div className={classes.usersTopicWindow}>
      <List>
        {userTopics[0].map((topic, i) => (
          <ListItem
            //onClick={e => goToDirMessage(e.target.innerText)}
            key={topic[0]}
            //key={i}
          >
            <ListItemText
              className={classes.multiline}
              primary={topic[1]}
              //primary={topic}
              secondary={"-Topic"}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
export default UsersTopicsListActive
