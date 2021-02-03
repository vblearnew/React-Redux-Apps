import React from 'react'
import Notification from './Notifications'
import ProjectList from '../Projects/ProjectList'

class Dashboard extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList/>
                    </div>
                    <div className="col s12 m5">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard