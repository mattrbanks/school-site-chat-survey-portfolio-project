const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan("dev"))

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

let Feedback = require("./models/feedback.model")

app.post("/survey", function(req, res) {
  const newFeedback = new Feedback({
    Name: req.body.name,
    Email: req.body.email,
    SatisfactionNumber: req.body.satisfactionNumber,
    ChildGrade: req.body.childGrade,
    NumberOfKidsInEagleElem: req.body.numberOfKidsInEagleElem,
    AfterSchoolEvents: req.body.afterSchoolEvents,
    BeforeSchoolEvents: req.body.beforeSchoolEvents,
    Concepts: req.body.concepts,
    Plays: req.body.plays,
    AcademicWorkshopsForParents: req.body.academicWorkshopsForParents,
    CommunityEvents: req.body.communityEvents,
    Newsletters: req.body.newsletters,
    Emails: req.body.emails,
    PtoMeetings: req.body.ptoMeetings,
    Fundraising: req.body.fundraising,
    AdditionalComments: req.body.additionalComments,
  })
  newFeedback
    .save()
    .then(() => res.json("Feedback added!"))
    .catch(err => res.status(400).json("Error: " + err))
})

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on *:3000")
})
