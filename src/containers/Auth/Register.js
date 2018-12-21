import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import TextInput from '../../components/Input/TextInput'

class Register extends Component {
  register = values => {
    console.log(values) // eslint-disable-line
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Grid container justify="center">
        <Card className="card center-card">
          <Typography gutterBottom variant="headline" component="h2">
            Register
          </Typography>
          <form onSubmit={handleSubmit(this.register)}>
            <div>
              <Field name="firstName" autoFocus component={TextInput} label="First Name" />
            </div>
            <div>
              <Field name="lastName" component={TextInput} label="Last Name" />
            </div>
            <div>
              <Field name="email" component={TextInput} label="Email" />
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

export default connect()(
  reduxForm({
    form: 'register',
  })(Register)
)
