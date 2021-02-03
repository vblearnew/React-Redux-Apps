import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Layout/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/Projects/ProjectDetails'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/ProjectDetails/:id" component={ProjectDetails}/>
            </Switch>  
        </div>  
      </BrowserRouter>
    )
  }
}

export default App