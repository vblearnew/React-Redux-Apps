import React from 'react'

class createProject extends React.Component {
    state ={
        title:'',
        content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div className="createProjectForm container">
               <h5 className="grey-text text-darken-3">Create project</h5>
                <form id="createProjectForm" className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Create Content</label>
                        <textarea id="content" class="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light orange" type="submit">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default createProject