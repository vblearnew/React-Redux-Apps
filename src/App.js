import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Layout/Nav'
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" component={Dashboard}/>
            </Switch>
            
        </div>  
      </BrowserRouter>
    )
  }
}

export default App