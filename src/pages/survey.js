import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const survey = () => (
  <Layout>
    <SEO title="survey" />
    <div>
      <h1>hello from Child Education Satisfaction Survey Form</h1>
      <p id="description">Are you satisfied with your child's education?</p>
      <form id="survey-form">
        <div>
          <div class="parent-info">
            <label id="name-label" for="name">
              Name (required)
            </label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>
        <div>
          <div class="parent-info">
            <label id="email-label" for="email">
              Email (required)
            </label>
          </div>
          <div class="parent-info">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div>
          <div class="parent-info">
            <label id="number-label" for="number">
              How satisfied are you with your child's education? Scale is 1 =
              Not satisfied and 10 = Highly satisfied (required)
            </label>
          </div>
          <div class="parent-info">
            <input
              class="satis-input-width"
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
          <div class="parent-info">
            <label for="dropdown">
              What type of schooling does your child receive?
            </label>
          </div>
          <div class="parent-info">
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
          <label id="radio-label" for="maritalStat">
            What is your current marital status?
          </label>
          <label id="radio-label1" for="married">
            <input id="married" value="1" type="radio" name="maritalAns" />
            Married
          </label>

          <label id="radio-label2" for="divorced" class="radio-margin1">
            <input id="divorced" value="2" type="radio" name="maritalAns" />
            Divorced
          </label>

          <label id="radio-label3" for="single" class="radio-margin2">
            <input id="single" value="3" type="radio" name="maritalAns" />
            Single
          </label>
        </div>
        <div class="inputLabelFlex">
          <div class="textLineUp">
            <label for="schCommRel">
              What are some ways your school builds relationships with your
              community? (You can choose more than one)
            </label>
          </div>
          <div class="inputAlignCheck">
            <ul id="schCommRel">
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="1" type="checkbox" />
                  After school events
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="2" type="checkbox" />
                  Before school events
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="3" type="checkbox" />
                  Concepts
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="4" type="checkbox" />
                  Plays
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="5" type="checkbox" />
                  Academic workshops for parents
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="6" type="checkbox" />
                  Community events
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="7" type="checkbox" />
                  Weekly or monthly newsletters
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="8" type="checkbox" />
                  Emails
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="9" type="checkbox" />
                  Weekly or monthly PTO meetings
                </label>
              </li>
              <li class="checkbox-style">
                <label>
                  <input name="schoolCommR" value="10" type="checkbox" />
                  Fundraising events
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div class="inputLabelFlex">
          <div class="parent-info">
            <label for="addInfo">
              What can your school do to increase your satisfaction?
            </label>
          </div>
          <div class="parent-info">
            <textarea
              id="addInfo"
              name="addInf"
              placeholder="Type here..."
            ></textarea>
          </div>
        </div>
        <button id="submit" type="submit">
          Submit Survey
        </button>
      </form>
    </div>
  </Layout>
)

export default survey
