import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/Signup">SignUp</NavLink></li>
                <li><NavLink to="/Signin">LogIn</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks