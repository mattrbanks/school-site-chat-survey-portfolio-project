import React from "react"
//import { nominalTypeHack } from "prop-types"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/core"
import styled from "styled-components"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#f4f4f4",
    paddingTop: "1rem",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  mobileMenuIcon: {
    display: "inline-block",
    cursor: "pointer",
  },
  barTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
  },
  barMiddle: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
  },
  barBottom: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
  },
  changeBarTop: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(-45deg) translate(-9px, 6px)",
  },
  changeBarMiddle: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
    opacity: "0",
  },
  changeBarBottom: {
    width: "35px",
    height: "5px",
    backgroundColor: "#333",
    margin: "6px 0",
    transition: "0.4s",
    transform: "rotate(45deg) translate(-8px, -8px)",
  },
  ulDesktop: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "1.25rem",
  },
}))

const Menu = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const root = classes.root

  const barTopCSS = classes.barTop
  const barMiddleCSS = classes.barMiddle
  const barBottomCSS = classes.barBottom
  const changeBarTopCSS = classes.changeBarTop
  const changeBarMiddleCSS = classes.changeBarMiddle
  const changeBarBottomCSS = classes.changeBarBottom

  return (
    <React.Fragment>
      <DesktopOnly>
        <div className={root}>
          <ul className={classes.ulDesktop}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/survey">Survey</Link>
            </li>
          </ul>
        </div>
      </DesktopOnly>
      <MobileOnly>
        <div className={"mobile-menu-styles-p mobile-menu-styles-l"}>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <div className={classes.mobileMenuIcon}>
              <div
                className={open === false ? barTopCSS : changeBarTopCSS}
              ></div>
              <div
                className={open === false ? barMiddleCSS : changeBarMiddleCSS}
              ></div>
              <div
                className={open === false ? barBottomCSS : changeBarBottomCSS}
              ></div>
            </div>
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <div style={{ display: "block", margin: "1rem" }}>
                        <div>
                          <MenuItem onClick={handleClose}>
                            <Link to="/">Home</Link>
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem onClick={handleClose}>
                            <Link to="/about">About</Link>
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem onClick={handleClose}>
                            <Link to="/contact">Contact</Link>
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem onClick={handleClose}>
                            <Link to="/chat">Chat</Link>
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem onClick={handleClose}>
                            <Link to="/survey">Survey</Link>
                          </MenuItem>
                        </div>
                      </div>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </MobileOnly>
    </React.Fragment>
  )
}
export default Menu

let DesktopOnly = styled.div`
  @media (max-width: 500px) and (orientation: portrait) {
    display: none;
  }
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  }
`
let MobileOnly = styled.div`
  @media (min-width: 500px) and (orientation: portrait) {
    display: none;
  }
  @media (min-width: 900px) and (orientation: landscape) {
    display: none;
  }
  @media (max-width: 500px) and (orientation: portrait) {
    .mobile-menu-styles-p {
      background: #f4f4f4;
      padding: 0.5rem;
      display: flex;
      justify-content: space-evenly;
      font-size: 1.25rem;
      position: relative;
      z-index: 10;
    }
  }
  @media (max-width: 900px) and (orientation: landscape) {
    .mobile-menu-styles-l {
      background: #f4f4f4;
      padding: 0.5rem;
      display: flex;
      justify-content: space-evenly;
      font-size: 1.25rem;
      position: relative;
      z-index: 10;
    }
  }
`
