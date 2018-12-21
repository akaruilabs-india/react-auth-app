import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../actions/auth'
import { openSnack, closeSnack } from '../../actions/app'
import style from './style'

class Header extends React.Component {
  state = {
    right: false,
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  toggleDrawer = open => () => {
    this.setState({
      right: open,
    })
  }

  closeSnackBar = (event, reason) => {
    this.props.closeSnack()
  }

  signOut = () => {
    this.props.signOutUser()
      .then(() => {
        this.props.history.push('/users/login')
        this.props.openSnack('Signed out successfully')
      })
  }

  render() {
    const { classes, currentUser: { isSignedIn }, app: { flash, message } } = this.props
    const { right, anchorEl } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.flex}>
              <Typography variant="title" color="inherit">
                React App
              </Typography>
            </Link>
            {isSignedIn ? (
              <div>
                <IconButton
                  aria-owns="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={() => this.signOut()}>Log out</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Hidden smUp>
                  <IconButton
                    onClick={this.toggleDrawer(true)}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                <Hidden xsDown>
                  <Link to="/users/register">
                    <Button color="inherit">Register</Button>
                  </Link>
                  <Link to="/users/login">
                    <Button color="inherit">Log In</Button>
                  </Link>
                </Hidden>
              </div>
            )}

            {!isSignedIn && <SwipeableDrawer
              anchor="right"
              open={right}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >
              <div tabIndex={0} role="button" onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                <List component="nav">
                  <Link to="/users/register">
                    <ListItem button>
                      <ListItemText primary="Register" />
                    </ListItem>
                  </Link>
                  <Link to="/users/login">
                    <ListItem button>
                      <ListItemText primary="Log In" />
                    </ListItem>
                  </Link>
                </List>
              </div>
            </SwipeableDrawer>}
          </Toolbar>
        </AppBar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={flash}
          autoHideDuration={6000}
          onClose={this.closeSnackBar}
        >
          <SnackbarContent
            onClose={this.closeSnackBar}
            message={message}
          />
        </Snackbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    currentUser: state.reduxTokenAuth.currentUser,
  }
}

export default connect(mapStateToProps, { signOutUser, closeSnack, openSnack })(withStyles(style)(Header))
