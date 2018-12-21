import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Home, Register, Login } from '../containers'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/users/register" component={Register} />
          <Route exact path="/users/login" component={Login} />
        </div>
      </Router>
    )
  }
}

export default Routes
