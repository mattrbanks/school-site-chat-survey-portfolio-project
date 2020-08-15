import React from "react"
import { Card, useTheme, useMediaQuery } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ImageReusable from "../components/imageReusable"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "2rem auto",
    width: "90%", //need to do some styling here and need media queries.
  },
  buttons: {
    width: "50%",
    height: "100%",
    //borderRight: "0.0625rem solid grey",
  },
  links: {
    fontSize: "2rem",
    [`${theme.breakpoints.down("sm")} and (orientation: portrait)`]: {
      fontSize: "1rem",
    },
    [`${theme.breakpoints.down("md")} and (orientation: landscape)`]: {
      fontSize: "1.5rem",
    },
  },
  galaxyFoldStylesP: {
    width: "100%",
    height: "6rem",
  },
  xxSmallScreensStylesP: {
    width: "100%",
    height: "7rem",
  },
  xSmallScreensStylesP: {
    width: "100%",
    height: "8rem",
  },
  smallScreensStylesP: {
    width: "100%",
    height: "9rem",
  },
  smallerTabletStylesP: {
    width: "100%",
    height: "9.5rem",
  },
  smallTabletStylesP: {
    width: "100%",
    height: "11.5rem",
  },
  xxSmallScreensStylesL: {
    width: "100%",
    height: "11rem",
    color: "red",
  },
  xSmallScreensStylesL: {
    width: "100%",
    height: "12.75rem",
    color: "red",
  },
}))

const FourGridButtons = () => {
  const classes = useStyles()
  const theme = useTheme()
  const galaxyFoldP = useMediaQuery(
    `${theme.breakpoints.between("0", "317")} and (orientation: portrait)`
  )
  const xxSmallScreensP = useMediaQuery(
    `${theme.breakpoints.between("318", "338")} and (orientation: portrait)`
  )
  const xSmallScreensP = useMediaQuery(
    `${theme.breakpoints.between("339", "401")} and (orientation: portrait)`
  )
  const smallScreensP = useMediaQuery(
    `${theme.breakpoints.between("402", "475")} and (orientation: portrait)`
  )
  const smallerTabletP = useMediaQuery(
    `${theme.breakpoints.between("476", "585")} and (orientation: portrait)`
  )
  const smallTabletP = useMediaQuery(
    `${theme.breakpoints.between("586", "650")} and (orientation: portrait)`
  )
  const xxSmallScreensL = useMediaQuery(
    `${theme.breakpoints.between("568", "624")} and (orientation: landscape)`
  )
  const xSmallScreensL = useMediaQuery(
    `${theme.breakpoints.between("625", "701")} and (orientation: landscape)`
  )

  const rootCSS = classes.root
  const buttonsCSS = classes.buttons
  const linksCSS = classes.links

  const galaxyFoldCSSp = classes.galaxyFoldStylesP
  const xxSmallScreensCSSp = classes.xxSmallScreensStylesP
  const xSmallScreensCSSp = classes.xSmallScreensStylesP
  const xxSmallScreensCSSl = classes.xxSmallScreensStylesL
  const xSmallScreensCSSl = classes.xSmallScreensStylesL
  const smallScreensCSSp = classes.smallScreensStylesP
  const smallerTabletCSSp = classes.smallerTabletStylesP
  const smallTabletCSSp = classes.smallTabletStylesP

  return (
    <div className={rootCSS}>
      <Card
        raised
        className={
          galaxyFoldP
            ? galaxyFoldCSSp
            : xxSmallScreensP
            ? xxSmallScreensCSSp
            : xSmallScreensP
            ? xSmallScreensCSSp
            : xxSmallScreensL
            ? xxSmallScreensCSSl
            : xSmallScreensL
            ? xSmallScreensCSSl
            : smallScreensP
            ? smallScreensCSSp
            : smallerTabletP
            ? smallerTabletCSSp
            : smallTabletP
            ? smallTabletCSSp
            : ""
        }
      >
        <Link to="/curriculum">
          <div style={{ display: "flex" }}>
            <div
              className={buttonsCSS}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "17%",
              }}
            >
              <span className={linksCSS}>Curriculum</span>
            </div>
            <div className={buttonsCSS}>
              <div style={{ maxWidth: `100%` }}>
                <ImageReusable
                  alt="books and alphabet blocks"
                  filename="curriculum.webp"
                />
              </div>
            </div>
          </div>
        </Link>
      </Card>
      <Card
        raised
        className={
          galaxyFoldP
            ? galaxyFoldCSSp
            : xxSmallScreensP
            ? xxSmallScreensCSSp
            : xSmallScreensP
            ? xSmallScreensCSSp
            : xxSmallScreensL
            ? xxSmallScreensCSSl
            : xSmallScreensL
            ? xSmallScreensCSSl
            : smallScreensP
            ? smallScreensCSSp
            : smallerTabletP
            ? smallerTabletCSSp
            : smallTabletP
            ? smallTabletCSSp
            : ""
        }
      >
        <Link to="/events">
          <div style={{ display: "flex" }}>
            <div className={buttonsCSS}>
              <div style={{ maxWidth: `100%` }}>
                <ImageReusable
                  alt="kids working on a project"
                  filename="events.webp"
                />
              </div>
            </div>
            <div
              className={buttonsCSS}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "17%",
              }}
            >
              <span className={linksCSS}>Events</span>
            </div>
          </div>
        </Link>
      </Card>
      <Card
        raised
        className={
          galaxyFoldP
            ? galaxyFoldCSSp
            : xxSmallScreensP
            ? xxSmallScreensCSSp
            : xSmallScreensP
            ? xSmallScreensCSSp
            : xxSmallScreensL
            ? xxSmallScreensCSSl
            : xSmallScreensL
            ? xSmallScreensCSSl
            : smallScreensP
            ? smallScreensCSSp
            : smallerTabletP
            ? smallerTabletCSSp
            : smallTabletP
            ? smallTabletCSSp
            : ""
        }
      >
        <Link to="/principals-message">
          <div style={{ display: "flex" }}>
            <div
              className={buttonsCSS}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "17%",
              }}
            >
              <span className={linksCSS}>Principal's Message</span>
            </div>
            <div className={buttonsCSS}>
              <div style={{ maxWidth: `100%` }}>
                <ImageReusable
                  alt="principal of the school"
                  filename="principalCropped.webp"
                />
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  )
}

export default FourGridButtons
