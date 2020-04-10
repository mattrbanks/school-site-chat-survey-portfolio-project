var app = require("express")()
var http = require("http").createServer(app)
var io = require("socket.io")(http)

const users = {} //this is the name next to the sent message saying who it is from
const usersMsg = {}
const usersDirMsgChats = {}
const userType = {}

io.on("connection", function(socket) {
  console.log("a user connected")

  socket.on("new-user", name => {
    users[socket.id] = name
    users[socket.id].push("-" + socket.id.substr(0, 5))
    usersMsg[socket.id] = name
    usersDirMsgChats[socket.id] = []

    console.log(users)
    console.log(usersMsg)
    console.log(usersDirMsgChats)
    io.emit("new-user", Object.entries(users))
    console.log(Object.entries(users))
  })

  socket.on("send chat message", msg => {
    msg.from = usersMsg[socket.id]
    console.log(usersMsg)
    console.log("message: " + JSON.stringify(msg))
    io.emit("chat message", msg)
  })

  socket.on("disconnect", () => {
    console.log("a user disconnected: " + JSON.stringify(users[socket.id]))
    socket.broadcast.emit("user-disconnected", users[socket.id])
    delete users[
      socket.id
    ] /*delete the user from the array of objects at the specified key and remove the element from the users array up top*/
    delete usersMsg[socket.id]
    delete usersDirMsgChats[socket.id]
    delete userType[socket.id]
    io.emit("new-user", Object.entries(users))
    console.log(Object.entries(users))
    // socket.removeAllListeners("connection")
    // socket.removeAllListeners("new-user")
    // socket.removeAllListeners("send chat message")
    // socket.removeAllListeners("disconnect")
  })
})

http.listen(3001, function() {
  console.log("listening on *:3001")
})
