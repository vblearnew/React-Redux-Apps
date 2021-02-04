import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Layout/Nav'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/Projects/ProjectDetails'
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import createProject from './components/Projects/CreateProjects'


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/ProjectDetails/:id" component={ProjectDetails}/>
                <Route path="/Signin" component={Signin}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Create" component={createProject}/>
            </Switch>  
        </div>  
      </BrowserRouter>
    )
  }
}

export default App