import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
//import Button from "@material-ui/core/Button"
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

const UsersTopicsList = props => {
  const classes = useStyles()
  const { usersListC } = React.useContext(context)
  console.log(props.allChats)

  console.log({ usersListC }) //we are not updating here from store!!!
  console.log(usersListC)
  const initialUsers = usersListC
  const [allTheUserNames, setUserNames] = React.useState(initialUsers)

  console.log({ initialUsers })
  console.log({ allTheUserNames })

  console.log({ allTheUserNames })

  return (
    <div>
      <List>
        {allTheUserNames.map((name, i) => (
          <ListItem
            //onClick={e => goToDirMessage(e.target.innerText)}
            key={name[0]}
          >
            <ListItemText
              primary={"active topic"}
              secondary={"props.activeTopic"}
            />
          </ListItem>
        ))}
      </List>
      {/* <Button
        //type="submit"
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          setUserNames([...allTheUserNames])
        }}
      >
        Update Users
      </Button> */}
    </div>
  )
}
export default UsersTopicsList
