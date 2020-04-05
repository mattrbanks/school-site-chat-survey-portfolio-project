import React from "react"
import axios from "axios"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Survey = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")

  const survey = {
    name,
    email
  }


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(survey)
    axios.post("http://localhost:3000/", survey)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    //Do I need to do something here?
    setEmail("")
    setName("")
  }

  return (
    <Layout>
      <SEO title="survey" />
      <div>
        <h1>hello from Child Education Satisfaction Survey Form</h1>
        <p>Are you satisfied with your child's education?</p>
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
          {/* <div>
          <div>
            <label id="number-label">
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
            />
          </div>
        </div>
        <div id="dropdowndiv1">
          <div>
            <label>What type of schooling does your child receive?</label>
          </div>
          <div>
            <select id="dropdown" name="schoolType">
              <option disabled value>
                Select One
              </option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="homeschool">Homeschool</option>
              <option value="dropout">Dropout</option>
            </select>
          </div>
        </div>
        <div>
          <label id="radio-label">What is your current marital status?</label>
          <label id="radio-label1">
            <input id="married" value="1" type="radio" name="maritalAns" />
            Married
          </label>

          <label id="radio-label2">
            <input id="divorced" value="2" type="radio" name="maritalAns" />
            Divorced
          </label>

          <label id="radio-label3">
            <input id="single" value="3" type="radio" name="maritalAns" />
            Single
          </label>
        </div>
        <div>
          <div>
            <label>
              What are some ways your school builds relationships with your
              community? (You can choose more than one)
            </label>
          </div>
          <div>
            <ul id="schCommRel">
              <li>
                <label>
                  <input name="schoolCommR" value="1" type="checkbox" />
                  After school events
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="2" type="checkbox" />
                  Before school events
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="3" type="checkbox" />
                  Concepts
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="4" type="checkbox" />
                  Plays
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="5" type="checkbox" />
                  Academic workshops for parents
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="6" type="checkbox" />
                  Community events
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="7" type="checkbox" />
                  Weekly or monthly newsletters
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="8" type="checkbox" />
                  Emails
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="9" type="checkbox" />
                  Weekly or monthly PTO meetings
                </label>
              </li>
              <li>
                <label>
                  <input name="schoolCommR" value="10" type="checkbox" />
                  Fundraising events
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <label>
              What can your school do to increase your satisfaction?
            </label>
          </div>
          <div>
            <textarea name="comment" placeholder="Type here..."></textarea>
          </div>
        </div> */}
          <button type="submit" value="Submit">
            Submit Survey
          </button>
        </form>
        <a href="/view-feedbacks">View feedbacks</a>
      </div>
    </Layout>
  )
}

export default Survey
