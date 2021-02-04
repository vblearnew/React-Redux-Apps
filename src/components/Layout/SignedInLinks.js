import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/Create">New Project</NavLink></li>
                <li><NavLink to="/">LogOut</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating orange lighten-1">VB</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks