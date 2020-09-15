import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { context } from "../../../store"

const UsersList = props => {
  const { usersListC } = React.useContext(context)

  const initialUsers = usersListC
  const [allTheUserNames, setUserNames] = React.useState(initialUsers)

  return (
    <div>
      <List>
        {allTheUserNames.map((name, i) => (
          <ListItem key={name[0]}>
            <ListItemText primary={name[1][0] + name[1][1] + name[1][2]} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
export default UsersList
