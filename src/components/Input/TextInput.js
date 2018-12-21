import React from 'react'
import TextField from '@material-ui/core/TextField'

export default class TextInput extends React.Component {
  render() {
    // console.log(this.props)
    const {
      input,
      label,
      type,
      autoFocus,
      meta: { touched, error },
      custom,
    } = this.props

    return (
      <TextField
        fullWidth
        margin="normal"
        autoComplete="off"
        label={label}
        type={type}
        autoFocus={autoFocus}
        error={touched && error}
        {...input}
        {...custom}
      />
    )
  }
}
