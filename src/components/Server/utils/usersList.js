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
  multiline: {
    display: "flex",
  },
  button: {
    width: "15%",
    height: "3.5rem",
  },
}))

const UsersList = props => {
  const classes = useStyles()
  const { usersListC, userTypeListC } = React.useContext(context)

  //console.log(usersListC) //this is logged before the array is actually filled so that is why it is empty
  const initialUsers = usersListC
  const [allTheUserNames, setUserNames] = React.useState(initialUsers)

  return (
    <div>
      <List>
        {allTheUserNames.map((name, i) => (
          <ListItem
            //onClick={e => goToDirMessage(e.target.innerText)}
            key={name[0]}
            button
          >
            <ListItemText
              className={classes.multiline}
              primary={name[1][0]}
              secondary={name[1][1] + name[1][2]}
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
export default UsersList
