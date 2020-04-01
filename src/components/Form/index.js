var express = require("express")
//var path = require("path")
//var bodyParser = require("body-parser")
//var mongodb = require("mongodb")

// var dbConn = mongodb.MongoClient("mongodb://localhost:27017", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

var app = express()

//var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.resolve(__dirname, "public")))

app.post("/survey", function(req, res) {
  console.log(JSON.stringify(req.body))
  // dbConn.then(function(db) {
  //   delete req.body._id // for safety reasons
  //   db.collection("feedbacks").insertOne(req.body)
  // })
  // res.send("Data received:\n" + JSON.stringify(req.body))
})

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
