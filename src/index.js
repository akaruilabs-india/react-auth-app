import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import Routes from './routes/index'
import { verifyCredentials } from './actions/auth'
import * as serviceWorker from './serviceWorker'
import 'typeface-roboto'
import './index.css'

const store = configureStore()
verifyCredentials(store)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main-container')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
