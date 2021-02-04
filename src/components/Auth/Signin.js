import React from 'react'

class Signin extends React.Component {
    state ={
        email:'',
        password:''
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
            <div className="signinForm container">
               <h5 className="grey-text text-darken-3">Sign In</h5>
                <form id="signinForm" className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="Password">Password</label>
                        <input id="password" type="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light orange" type="submit" name="action">Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin