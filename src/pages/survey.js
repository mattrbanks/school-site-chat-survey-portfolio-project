import React from "react"
import axios from "axios"
import { navigate } from "@reach/router"

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
  const [afterSchoolEvents, setAfterSchoolEvents] = React.useState(false)
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
    e.preventDefault()
    axios
      .post("https://school-site-chat-survey-form.herokuapp.com/survey", survey)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    navigate("/thank-you-page")
  }

  return (
    <Layout>
      <SEO title="survey" />
      <div style={{ margin: "1.5rem" }}>
        <h1>Eagle Elementary Satisfaction Survey</h1>
        <form onSubmit={submitHandler}>
          <div style={{ marginBottom: "1rem" }}>
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
          <div style={{ marginBottom: "1rem" }}>
            <div>
              <label htmlFor="email">Email (required)</label>
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <div>
              <label htmlFor="number" id="number-label">
                How satisfied are you with your child's education?
                <br /> Scale is 1 = Not satisfied and 10 = Highly satisfied
                <br /> (required)
              </label>
            </div>
            <div>
              <input
                style={{ width: "15%" }}
                type="number"
                name="number"
                id="number"
                min="1"
                max="10"
                placeholder="Satisfaction"
                value={satisfactionNumber}
                onChange={e => setSatisfactionNumber(e.target.value)}
              />
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }} id="dropdowndiv1">
            <div>
              <label>What grade is your child in?</label>
            </div>
            <div>
              <select
                id="dropdown"
                name="schoolType"
                onChange={e => setChildGrad(e.target.value)}
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Select One
                </option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
              </select>
            </div>
          </div>
          <div style={{ display: "block", marginBottom: "1rem" }}>
            <div>
              <label style={{ marginBottom: "1rem" }} id="radio-label">
                How many of your children attend Eagle Elementary?
              </label>
            </div>
            <div style={{ display: "block" }}>
              <div>
                <label style={{ marginBottom: "0.5rem" }} id="radio-label1">
                  <input
                    id="one"
                    onChange={e => setNumberOfKidsInEagleElem(e.target.value)}
                    value="One"
                    type="radio"
                    name="maritalAns"
                  />
                  One
                </label>
              </div>

              <div>
                <label style={{ marginBottom: "0.5rem" }} id="radio-label2">
                  <input
                    id="two"
                    onChange={e => setNumberOfKidsInEagleElem(e.target.value)}
                    value="Two"
                    type="radio"
                    name="maritalAns"
                  />
                  Two
                </label>
              </div>

              <div>
                <label id="radio-label3">
                  <input
                    id="Three or more"
                    onChange={e => setNumberOfKidsInEagleElem(e.target.value)}
                    value="Three or more"
                    type="radio"
                    name="maritalAns"
                  />
                  Three or more
                </label>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: "1rem" }}>
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
                      type="checkbox"
                    />
                    Fundraising events
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginBottom: "1rem" }}>
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
