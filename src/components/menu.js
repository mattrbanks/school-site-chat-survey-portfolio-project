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
import { useTheme, useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    background: "#f4f4f4",
    paddingTop: "1rem",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  noBigScreenMenuStyles: {
    display: "none",
  },
  noMobileMenuStyles: {
    display: "none",
  },
  mobileMenuStylesP: {
    //display: "block",
    background: "#f4f4f4",
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "1.25rem",
  },
  mobileMenuStylesL: {
    //display: "block",
    background: "#f4f4f4",
    paddingTop: "1rem",
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

  const mobileMenuP = useMediaQuery(
    `${theme.breakpoints.between("0", "500")} and (orientation: portrait)`
  )

  const mobileMenuL = useMediaQuery(
    `${theme.breakpoints.between("0", "900")} and (orientation: landscape)`
  )

  const root = classes.root
  const mobileMenuStylesCSSp = classes.mobileMenuStylesP
  const mobileMenuStylesCSSl = classes.mobileMenuStylesL
  const noMobileMenuStylesCSS = classes.noMobileMenuStyles
  const noBigScreenMenuStylesCSS = classes.noBigScreenMenuStyles

  return (
    <React.Fragment>
      <div
        className={
          mobileMenuP
            ? noBigScreenMenuStylesCSS
            : mobileMenuL
            ? noBigScreenMenuStylesCSS
            : root
        }
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "1.25rem",
          }}
        >
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
      <div
        className={
          mobileMenuP
            ? mobileMenuStylesCSSp
            : mobileMenuL
            ? mobileMenuStylesCSSl
            : noMobileMenuStylesCSS
        }
      >
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Menu
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
                    <div style={{ display: "block" }}>
                      <div>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                      </div>
                      <div>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                      </div>
                      <div>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </div>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </React.Fragment>
  )
}
export default Menu
