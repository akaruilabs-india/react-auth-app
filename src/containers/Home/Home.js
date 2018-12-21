import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from '@material-ui/core'

class Home extends Component {
  render() {
    const {
      currentUser: { isSignedIn, attributes },
    } = this.props

    return (
      <Grid container justify="center">
        <Card className="card">
          <div className="container home">
            <h1>Home</h1>
            <h3>
              {isSignedIn ? `Hello ${attributes.firstName}` : 'Please login first'}
            </h3>
          </div>
        </Card>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
  }
}

export default connect(
  mapStateToProps
)(Home)
