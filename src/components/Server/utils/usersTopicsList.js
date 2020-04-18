import React from "react"
import { context } from "../../../store"

const UsersList = props => {
  const {
    usersListC,
    usersTopicsListC,
    allTopics,
    sendChatAction,
    sendChatConnectAction,
  } = React.useContext(context)

  console.log(usersTopicsListC)

  // React.useEffect(() => {
  //   setTimeout(function() {
  //     sendChatConnectAction({
  //       from: "",
  //       msg: "CONNECTED",
  //       topic: "", //need active topic here instead
  //     })
  //   }, 500)
  // }, [])

  return <div>{/* Maybe we can return something useful here later */}</div>
}
export default UsersList
