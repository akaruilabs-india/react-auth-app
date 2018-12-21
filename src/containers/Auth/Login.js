import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import TextInput from '../../components/Input/TextInput'
import { signInUser } from '../../actions/auth'
import { openSnack } from '../../actions/app'

class Login extends Component {
  login = values => {
    this.props.signInUser(values).then(() => {
      this.props.history.push('/')
      this.props.openSnack('Signed in successfully')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Grid container justify="center">
        <Card className="card center-card">
          <Typography gutterBottom variant="headline" component="h2">
            Log In
          </Typography>
          <form onSubmit={handleSubmit(this.login)}>
            <div>
              <Field name="email" autoFocus component={TextInput} label="Email" />
            </div>
            <div>
              <Field name="password" component={TextInput} type="password" label="Password" />
            </div>
            <Button type="submit" variant="contained" color="primary" className="margin-top">
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
    )
  }
}

export default connect(
  null,
  { signInUser, openSnack }
)(
  reduxForm({
    form: 'login',
  })(Login)
)
