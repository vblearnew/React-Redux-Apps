import React from 'react'

const ProjectDetails = (props) => {
    console.log(props)
    return (
        <div className="container projectDetails">
            <div className="card z-depth-1 projectSummary">
                <div className="card-content">
                    <span className="card-title ">project Title - {props.match.params.id}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails