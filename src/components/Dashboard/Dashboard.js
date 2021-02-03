import React from 'react'
import Notification from './Notifications'
import ProjectList from '../Projects/ProjectList'

class Dashboard extends React.Component {
    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div class="col s12 m5">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard