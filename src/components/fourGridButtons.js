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
    height: "100%",
    borderRight: "0.0625rem solid grey",
    borderLeft: "0.0625rem solid grey",
  },
  buttonsRight: {
    width: "50%",
    height: "100%",
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
  galaxyFoldStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "6rem",
  },
  xxSmallScreensStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "7rem",
  },
  xSmallScreensStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "8rem",
  },
  smallScreensStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "9rem",
  },
  smallerTabletStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "9.5rem",
  },
  smallTabletStylesP: {
    //margin: "2rem auto",
    width: "100%",
    height: "11.5rem",
  },
  xxSmallScreensStylesL: {
    //margin: "2rem auto",
    width: "100%",
    height: "11rem",
    color: "red",
  },
  xSmallScreensStylesL: {
    //margin: "2rem auto",
    width: "100%",
    height: "12.75rem",
    color: "red",
  },
  // smallScreensStylesL: {
  //   //margin: "2rem auto",
  //   width: "100%",
  //   height: "14rem",
  //   color: "red",
  // },
  // mediumScreensStylesP: {
  //   //margin: "2rem auto",
  //   width: "100%",
  //   height: "15rem",
  // },
  // mediumScreensStylesL: {
  //   //margin: "2rem auto",
  //   width: "100%",
  //   height: "16rem",
  // },
  // mediumBiggerScreensStyles: {
  //   //margin: "2rem auto",
  //   width: "100%",
  //   height: "20rem",
  // },
  // largeScreensStyles: {
  //   //margin: "2rem auto",
  //   width: "100%",
  //   height: "30rem",
  // },
  // xLargeScreensUpStyles: {
  //   //margin: "2rem auto",
  //   width: "100%",
  //   height: "35rem",
  // },
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
  // const mediumScreensP = useMediaQuery(
  //   `${theme.breakpoints.between("749", "861")} and (orientation: portrait)`
  // )
  // const smallScreensL = useMediaQuery(
  //   `${theme.breakpoints.between("702", "748")} and (orientation: landscape)`
  // )
  // const mediumScreensL = useMediaQuery(
  //   `${theme.breakpoints.between("749", "861")} and (orientation: landscape)`
  // )
  // const mediumBiggerScreens = useMediaQuery(
  //   theme.breakpoints.between("862", "1366")
  // )
  // const largeScreens = useMediaQuery(theme.breakpoints.between("1367", "1920"))
  // const xLargeScreensUp = useMediaQuery(theme.breakpoints.up("1921"))
  // console.log(xSmallScreensP)
  // console.log(xSmallScreensL)
  // console.log(smallScreensP)
  // console.log(smallScreensL)

  const rootCSS = classes.root
  const buttonsRightLeftCSS = classes.buttonsRightLeft
  const buttonsRightCSS = classes.buttonsRight
  const linksCSS = classes.links

  const galaxyFoldCSSp = classes.galaxyFoldStylesP
  const xxSmallScreensCSSp = classes.xxSmallScreensStylesP
  const xSmallScreensCSSp = classes.xSmallScreensStylesP
  const xxSmallScreensCSSl = classes.xxSmallScreensStylesL
  const xSmallScreensCSSl = classes.xSmallScreensStylesL
  const smallScreensCSSp = classes.smallScreensStylesP
  const smallerTabletCSSp = classes.smallerTabletStylesP
  const smallTabletCSSp = classes.smallTabletStylesP
  // const smallScreensCSSl = classes.smallScreensStylesL
  // const mediumScreensCSSp = classes.mediumScreensStylesP
  // const mediumScreensCSSl = classes.mediumScreensStylesL
  // const mediumBiggerScreensCSS = classes.mediumBiggerScreensStyles
  // const largeScreensCSS = classes.largeScreensStyles
  // const xLargeScreensUpCSS = classes.xLargeScreensUpStyles

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
        // className={
        //   xxSmallScreensP
        //     ? xxSmallScreensCSSp
        //     : xSmallScreensP
        //     ? xSmallScreensCSSp
        //     : xxSmallScreensL
        //     ? xxSmallScreensCSSl
        //     : xSmallScreensL
        //     ? xSmallScreensCSSl
        //     : smallScreensP
        //     ? smallScreensCSSp
        //     : smallScreensL
        //     ? smallScreensCSSl
        //     : mediumScreensP
        //     ? mediumScreensCSSp
        //     : mediumScreensL
        //     ? mediumScreensCSSl
        //     : mediumBiggerScreens
        //     ? mediumBiggerScreensCSS
        //     : largeScreens
        //     ? largeScreensCSS
        //     : xLargeScreensUp
        //     ? xLargeScreensUpCSS
        //     : ""
        // }
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
        // className={
        //   xxSmallScreensP
        //     ? xxSmallScreensCSSp
        //     : xSmallScreensP
        //     ? xSmallScreensCSSp
        //     : xxSmallScreensL
        //     ? xxSmallScreensCSSl
        //     : xSmallScreensL
        //     ? xSmallScreensCSSl
        //     : smallScreensP
        //     ? smallScreensCSSp
        //     : smallScreensL
        //     ? smallScreensCSSl
        //     : mediumScreensP
        //     ? mediumScreensCSSp
        //     : mediumScreensL
        //     ? mediumScreensCSSl
        //     : mediumBiggerScreens
        //     ? mediumBiggerScreensCSS
        //     : largeScreens
        //     ? largeScreensCSS
        //     : xLargeScreensUp
        //     ? xLargeScreensUpCSS
        //     : ""
        // }
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
        // className={
        //   xxSmallScreensP
        //     ? xxSmallScreensCSSp
        //     : xSmallScreensP
        //     ? xSmallScreensCSSp
        //     : xxSmallScreensL
        //     ? xxSmallScreensCSSl
        //     : xSmallScreensL
        //     ? xSmallScreensCSSl
        //     : smallScreensP
        //     ? smallScreensCSSp
        //     : smallScreensL
        //     ? smallScreensCSSl
        //     : mediumScreensP
        //     ? mediumScreensCSSp
        //     : mediumScreensL
        //     ? mediumScreensCSSl
        //     : mediumBiggerScreens
        //     ? mediumBiggerScreensCSS
        //     : largeScreens
        //     ? largeScreensCSS
        //     : xLargeScreensUp
        //     ? xLargeScreensUpCSS
        //     : ""
        // }
      >
        <Link to="/principals-message">
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
