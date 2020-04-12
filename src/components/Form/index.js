const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
//const path = require("path")
//const bodyParser = require("body-parser")
//const mongodb = require("mongodb")

// const dbConn = mongodb.MongoClient("mongodb://localhost:27017", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

const app = express()

//console.log("hello")

//const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan("dev"))
//app.use(express.static(path.resolve(__dirname, "public")))

// app.post("/survey", function(req, res) {
//   console.log(req.body)
//   res.send("received your request")
//   console.log(JSON.stringify(req.body))
//    dbConn.then(function(db) {
//      delete req.body._id // for safety reasons
//      db.collection("feedbacks").insertOne(req.body)
//    })
//    res.send("Data received:\n" + JSON.stringify(req.body))
// })

let surveys = []
console.log(surveys)
// let topics = []
// console.log(topics)

// app.get("/", function(req, res) {
//   //res.render('index', {})
//   console.log("we are in")
//   res.writeHead(200, {
//     "Content.type": "application/json",
//   })
//   console.log("Surveys : ",JSON.stringify(surveys))
// })

app.post("/survey", function(req, res) {
  //res.render('index', {})
  console.log("we are in")
  const newForm = {
    Name: req.body.name,
    Email: req.body.email,
  }
  surveys.push(newForm)
  console.log(surveys)
  res.send("hello world!")
})

// app.post("/activeTopic", function(req, res) {
//   //res.send("hello from express")
//   const newTopic = {
//     activeTopic: req.body.activeTopic,
//   }
//   topics.length = 0
//   topics.push(newTopic)
//   console.log(newTopic)
//   console.log(topics)
//   res.send("see req.body console log") //we can send back topics
// })

// app.get("/sendActiveTopic", function(req, res) {
//   res.send(topics)
// })

// app.get("/view-feedbacks", function(req, res) {
//   dbConn.then(function(db) {
//     db.collection("feedbacks")
//       .find({})
//       .toArray()
//       .then(function(feedbacks) {
//         res.status(200).json(feedbacks)
//       })
//   })
// })

//

app.listen(3000, function() {
  console.log("listening on *:3000")
})

// app.listen(process.env.PORT || 3000, function() {
//   console.log("listening on *:3000")
// })
