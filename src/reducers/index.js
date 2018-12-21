import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import app from './app'

export default combineReducers({
  form,
  app,
  reduxTokenAuth: reduxTokenAuthReducer,
})
