import React from 'react'

class Signup extends React.Component {
    state ={
        email:'',
        password:'',
        firstname:'',
        lastname:''
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
            <div className="signupForm container">
               <h5 className="grey-text text-darken-3">Sign Up</h5>
                <form id="signupForm" className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="Password">Password</label>
                        <input id="password" type="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname" type="text" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input id="lastname" type="text" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light orange" type="submit" name="action">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup