const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
  Name: String,
  Email: String,
  SatisfactionNumber: Number,
  ChildGrade: String,
  NumberOfKidsInEagleElem: String,
  AfterSchoolEvents: Boolean,
  BeforeSchoolEvents: Boolean,
  Concepts: Boolean,
  Plays: Boolean,
  AcademicWorkshopsForParents: Boolean,
  CommunityEvents: Boolean,
  Newsletters: Boolean,
  Emails: Boolean,
  PtoMeetings: Boolean,
  Fundraising: Boolean,
  AdditionalComments: String,
})

module.exports = mongoose.model("Feedback", schema)
