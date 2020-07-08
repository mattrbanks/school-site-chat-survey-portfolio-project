import React from "react"
import axios from "axios"
import { navigate } from "@reach/router"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Survey = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [satisfactionNumber, setSatisfactionNumber] = React.useState("")
  const [childGrade, setChildGrad] = React.useState("")
  const [numberOfKidsInEagleElem, setNumberOfKidsInEagleElem] = React.useState(
    ""
  )
  const [afterSchoolEvents, setAfterSchoolEvents] = React.useState(false) //should be initially object or array right?
  const [beforeSchoolEvents, setBeforeSchoolEvents] = React.useState(false)
  const [concepts, setConcepts] = React.useState(false)
  const [plays, setPlays] = React.useState(false)
  const [
    academicWorkshopsForParents,
    setAcademicWorkshopsForParents,
  ] = React.useState(false)
  const [communityEvents, setCommunityEvents] = React.useState(false)
  const [newsletters, setNewsletters] = React.useState(false)
  const [emails, setEmails] = React.useState(false)
  const [ptoMeetings, setPtoMeetings] = React.useState(false)
  const [fundraising, setFundraising] = React.useState(false)
  const [additionalComments, setAdditionalComments] = React.useState("")

  const survey = {
    name,
    email,
    satisfactionNumber,
    childGrade,
    numberOfKidsInEagleElem,
    afterSchoolEvents,
    beforeSchoolEvents,
    concepts,
    plays,
    academicWorkshopsForParents,
    communityEvents,
    newsletters,
    emails,
    ptoMeetings,
    fundraising,
    additionalComments,
  }

  const submitHandler = e => {
    e.preventDefault() //disable this when survey is done to show submission by refresh.
    console.log(survey)
    axios
      .post("http://localhost:3000/survey", survey)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    navigate("/thank-you-page")
    //Do I need these here if I am just going to require them?
    // setEmail("")
    // setName("")
    // setSatisfactionNumber("")
    //setSchoolType("") //this state will stay set upon submission unless prevent default is disables and allows the screen to refresh.
    //setMaritalStatus("")
  }

  return (
    <Layout>
      <SEO title="survey" />
      <div style={{ margin: "1.5rem" }}>
        <h1>Eagle Elementary Satisfaction Survey</h1>
        <form onSubmit={submitHandler}>
          <div>
            <div>
              <label htmlFor="name">Name (required)</label>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email (required)</label>
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="number" id="number-label">
                How satisfied are you with your child's education? Scale is 1 =
                Not satisfied and 10 = Highly satisfied (required)
              </label>
            </div>
            <div>
              <input
                type="number"
                name="number"
                id="number"
                min="1"
                max="10"
                placeholder="Satisfaction level"
                value={satisfactionNumber}
                onChange={e => setSatisfactionNumber(e.target.value)}
              />
            </div>
          </div>
          <div id="dropdowndiv1">
            <div>
              <label>What grade is your child in?</label>
            </div>
            <div>
              <select
                id="dropdown"
                name="schoolType"
                onChange={e => setChildGrad(e.target.value)}
                required
              >
                <option value="" disabled selected hidden>
                  Select One
                </option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
              </select>
            </div>
          </div>
          <div>
            <label id="radio-label">
              How many of your children attend Eagle Elementary?
            </label>
            <label id="radio-label1">
              <input
                id="married"
                onChange={e => setNumberOfKidsInEagleElem(e.target.value)}
                value="One"
                type="radio"
                name="maritalAns"
              />
              One
            </label>

            <label id="radio-label2">
              <input
                id="divorced"
                onChange={e => setNumberOfKidsInEagleElem(e.target.value)}
                value="Two"
                type="radio"
                name="maritalAns"
              />
              Two
            </label>

            <label id="radio-label3">
              <input
                id="single"
                onChange={e => setNumberOfKidsInEagleElem(e.target.value)}
                value="Three or more"
                type="radio"
                name="maritalAns"
              />
              Three or more
            </label>
          </div>
          <div>
            <div>
              <label>
                These are the things our school currently does to reach out to
                the community. Please choose the ones you like the best. (You
                can choose more than one)
              </label>
            </div>
            <div>
              <ul id="schCommRel" style={{ listStyle: "none" }}>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setAfterSchoolEvents(!afterSchoolEvents)}
                      //value="After school events"
                      type="checkbox"
                    />
                    After school events
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setBeforeSchoolEvents(!beforeSchoolEvents)}
                      //value="Before school events"
                      type="checkbox"
                    />
                    Before school events
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setConcepts(!concepts)}
                      //value="Concepts"
                      type="checkbox"
                    />
                    Concepts
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setPlays(!plays)}
                      type="checkbox"
                    />
                    Plays
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e =>
                        setAcademicWorkshopsForParents(
                          !academicWorkshopsForParents
                        )
                      }
                      //value="Academic workshops for parents"
                      type="checkbox"
                    />
                    Academic workshops for parents
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setCommunityEvents(!communityEvents)}
                      //value="Community events"
                      type="checkbox"
                    />
                    Community events
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setNewsletters(!newsletters)}
                      //value="Weekly or monthly newsletters"
                      type="checkbox"
                    />
                    Weekly or monthly newsletters
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setEmails(!emails)}
                      type="checkbox"
                    />
                    Emails
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setPtoMeetings(!ptoMeetings)}
                      //value="Weekly or monthly PTO meetings"
                      type="checkbox"
                    />
                    Weekly or monthly PTO meetings
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      name="schoolCommR"
                      onChange={e => setFundraising(!fundraising)}
                      //value="Fundraising events"
                      type="checkbox"
                    />
                    Fundraising events
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <label>
                What can our school do to increase your satisfaction?
              </label>
            </div>
            <div>
              <textarea
                name="comment"
                onChange={e => setAdditionalComments(e.target.value)}
                placeholder="Type here..."
              ></textarea>
            </div>
          </div>
          <button type="submit" value="Submit">
            Submit Survey
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Survey
