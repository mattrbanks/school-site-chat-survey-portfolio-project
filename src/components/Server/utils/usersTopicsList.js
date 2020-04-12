import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
//import Button from "@material-ui/core/Button"
//import { context } from "../../../store"
//import axios from "axios"

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
  //const { usersListC } = React.useContext(context)

  //const initialTopic = []
  //const [newTopicPicked, setNewTopic] = React.useState(initialTopic)

  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/sendActiveTopic")
  //     .then(response => {
  //       console.log(response)
  //       console.log(JSON.stringify(response.data))
  //       initialTopic.length = 0
  //       console.log(response.data)
  //       initialTopic.push(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })

  //   console.log(initialTopic)
  //   //Do I need to do something here?
  //   //setEmail("")
  //   //setName("")
  // }, [])

  // setInterval(function() {
  //   axios
  //     .get("http://localhost:3000/sendActiveTopic")
  //     .then(response => {
  //       console.log(response)
  //       console.log(JSON.stringify(response.data))
  //       initialTopic.length = 0
  //       console.log(response.data)
  //       initialTopic.push(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })

  //   console.log(initialTopic)
  // }, [])

  return (
    <div>
      <List>
        <ListItem
        //onClick={e => goToDirMessage(e.target.innerText)}
        //key={i}
        >
          <ListItemText
            className={classes.multiline}
            primary={"activeTopic"}
            //primary={topic[0].activeTopic}
            secondary={"-Topic"}
          />
        </ListItem>
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
