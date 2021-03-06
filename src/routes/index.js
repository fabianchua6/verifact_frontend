import React from 'react'
import { Route } from 'react-router-dom'
import Question from '../views/Question'
import Home from '../views/Home'
import Signup from '../views/Signup'
import NotFound from '../views/404'

export default [
  <Route
    exact
    key='question'
    path='/question/:id'
    component={Question}
  />,
  <Route exact key='home' path='/' component={Home} />,
  <Route exact key='signup' path='/signup' component={Signup} />,
  <Route key='404' path='*' component={NotFound} />
]
