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
  buttonsRightLeft: {
    width: "50%",
    height: "16rem",
    borderRight: "0.0625rem solid grey",
    borderLeft: "0.0625rem solid grey",
  },
  buttonsRight: {
    width: "50%",
    height: "16rem",
    borderRight: "0.0625rem solid grey",
  },
  links: {
    display: "flex",
    height: "18.75rem",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    [`${theme.breakpoints.down("sm")} and (orientation: portrait)`]: {
      height: "10rem",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1rem",
    },
    [`${theme.breakpoints.down("md")} and (orientation: landscape)`]: {
      height: "13rem",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
    },
  },
  xSmallScreensStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "8rem",
  },
  xSmallScreensStylesL: {
    //margin: "2rem auto",
    width: "100%",
    height: "8rem",
    color: "red",
  },
  smallScreensStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "8rem",
  },
  smallScreensStylesL: {
    //margin: "2rem auto",
    width: "100%",
    height: "12.5rem",
    color: "red",
  },
  mediumScreensStyles: {
    //margin: "2rem auto",
    width: "100%",
    height: "9rem",
  },
  largeScreensStyles: {
    //margin: "2rem auto",
    width: "100%",
    height: "9rem",
  },
  xLargeScreensUpStyles: {
    //margin: "2rem auto",
    width: "100%",
    height: "9rem",
  },
}))

const FourGridButtons = () => {
  const classes = useStyles()
  const theme = useTheme()
  const xSmallScreensP = useMediaQuery(
    `${theme.breakpoints.between("0", "599")} and (orientation: portrait)`
  )
  const xSmallScreensL = useMediaQuery(
    `${theme.breakpoints.between("0", "599")} and (orientation: landscape)`
  )
  const smallScreensP = useMediaQuery(
    `${theme.breakpoints.between("600", "959")} and (orientation: portrait)`
  )
  const smallScreensL = useMediaQuery(
    `${theme.breakpoints.between("600", "959")} and (orientation: landscape)`
  )
  const mediumScreens = useMediaQuery(theme.breakpoints.between("960", "1279"))
  const largeScreens = useMediaQuery(theme.breakpoints.between("1280", "1920"))
  const xLargeScreensUp = useMediaQuery(theme.breakpoints.up("1921"))
  console.log(xSmallScreensP)
  console.log(xSmallScreensL)
  console.log(smallScreensP)
  console.log(smallScreensL)

  const rootCSS = classes.root
  const buttonsRightLeftCSS = classes.buttonsRightLeft
  const buttonsRightCSS = classes.buttonsRight
  const linksCSS = classes.links

  const xSmallScreensCSSp = classes.xSmallScreensStylesP
  const xSmallScreensCSSl = classes.xSmallScreensStylesL
  const smallScreensCSSp = classes.smallScreensStylesP
  const smallScreensCSSl = classes.smallScreensStylesL
  const mediumScreensCSS = classes.mediumScreensStyles
  const largeScreensCSS = classes.largeScreensStyles
  const xLargeScreensUpCSS = classes.xLargeScreensUpStyles

  return (
    <div className={rootCSS}>
      <Card
        raised
        className={
          xSmallScreensP
            ? xSmallScreensCSSp
            : xSmallScreensL
            ? xSmallScreensCSSl
            : smallScreensP
            ? smallScreensCSSp
            : smallScreensL
            ? smallScreensCSSl
            : mediumScreens
            ? mediumScreensCSS
            : largeScreens
            ? largeScreensCSS
            : xLargeScreensUp
            ? xLargeScreensUpCSS
            : ""
        }
      >
        <Link to="/curriculum">
          <div style={{ display: "flex" }}>
            <div className={buttonsRightLeftCSS}>
              <span className={linksCSS}>Curriculum</span>
            </div>
            <div className={buttonsRightCSS}>
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
          xSmallScreensP
            ? xSmallScreensCSSp
            : xSmallScreensL
            ? xSmallScreensCSSl
            : smallScreensP
            ? smallScreensCSSp
            : smallScreensL
            ? smallScreensCSSl
            : mediumScreens
            ? mediumScreensCSS
            : largeScreens
            ? largeScreensCSS
            : xLargeScreensUp
            ? xLargeScreensUpCSS
            : ""
        }
      >
        <Link to="/events">
          <div style={{ display: "flex" }}>
            <div className={buttonsRightLeftCSS}>
              <div style={{ maxWidth: `100%` }}>
                <ImageReusable
                  alt="kids working on a project"
                  filename="events.webp"
                />
              </div>
            </div>
            <div className={buttonsRightCSS}>
              <span className={linksCSS}>Events</span>
            </div>
          </div>
        </Link>
      </Card>
      <Card
        raised
        className={
          xSmallScreensP
            ? xSmallScreensCSSp
            : xSmallScreensL
            ? xSmallScreensCSSl
            : smallScreensP
            ? smallScreensCSSp
            : smallScreensL
            ? smallScreensCSSl
            : mediumScreens
            ? mediumScreensCSS
            : largeScreens
            ? largeScreensCSS
            : xLargeScreensUp
            ? xLargeScreensUpCSS
            : ""
        }
      >
        <Link to="/principalsMessage">
          <div style={{ display: "flex" }}>
            <div className={buttonsRightLeftCSS}>
              <span className={linksCSS}>Principal's Message</span>
            </div>
            <div className={buttonsRightCSS}>
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
