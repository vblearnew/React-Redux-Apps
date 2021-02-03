import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container">
                <Link id="logo-container" to="/" class="brand-logo">Logo</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar