const express = require("express")
const app = express()
//var app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http, {
  pingInterval: 25000,
  pingTimeout: 60000,
})

const cors = require("cors")
const morgan = require("morgan")
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const users = {} //this is the name next to the sent message saying who it is from
const usersMsg = {}
const usersDirMsgChats = {}
const userType = {}
//const topicTemp = []
const topicsAll = {}

app.post("/activeTopic", function(req, res) {
  // //res.send("hello from socket.io")
  // const newTopic = {
  //   activeTopic: req.body,
  // }
  // topicTemp.length = 0
  // topicTemp.push(newTopic)
  // console.log(newTopic)
  // console.log(topicTemp)
  // res.send(topicTemp) //we can send back topics
})

io.on("connection", function(socket) {
  console.log("a user connected")

  socket.on("new-user", name => {
    users[socket.id] = name
    users[socket.id].push("-" + socket.id.substr(0, 5))
    usersMsg[socket.id] = name
    usersDirMsgChats[socket.id] = []

    console.log(users[socket.id])
    console.log(usersMsg)
    console.log(usersDirMsgChats)
    io.emit("new-user", Object.entries(users))
    console.log(Object.entries(users))
  })

  socket.on("active-topic-socket", topic => {
    topic.from = users[socket.id]
    topicsAll[socket.id] = topic

    console.log(topicsAll)
    console.log(Object.values(topicsAll))
    console.log("activeTopic: " + JSON.stringify(topic + "-->" + socket.id))
    io.emit("active-topic-socket", Object.values(topicsAll))
  })

  socket.on("send chat message", msg => {
    msg.from = usersMsg[socket.id]
    console.log(usersMsg)
    console.log("message: " + JSON.stringify(msg))
    console.log(msg)
    io.emit("chat message", msg)
  })

  socket.on("disconnect", () => {
    console.log("a user disconnected: " + JSON.stringify(users[socket.id]))
    socket.broadcast.emit("user-disconnected", topicsAll[socket.id])
    delete users[
      socket.id
    ] /*delete the user from the array of objects at the specified key and remove the element from the users array up top*/
    delete usersMsg[socket.id]
    delete usersDirMsgChats[socket.id]
    delete userType[socket.id]
    delete topicsAll[socket.id] //we will send this out instead of users[socket.id], which is just name
    io.emit("active-topic-socket", Object.values(topicsAll))
    console.log(Object.values(topicsAll))
  })
})

http.listen(3001, function() {
  console.log("listening on *:3001")
})
