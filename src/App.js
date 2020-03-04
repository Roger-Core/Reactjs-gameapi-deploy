import React from 'react'
import Nav from './pages/Nav'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import About from './pages/About'
import GameDetail from './GameDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={About} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/shop/:id' component={GameDetail} />
        </Switch>
      </div>
    </Router>
  )
}


export default App
