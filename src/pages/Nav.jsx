import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const NavStyle = {
        color: '#fff'
    }

    return (
        <nav>
            <Link style={NavStyle} to='/'>
                <h3>Logo</h3>
            </Link>
            <ul className='Nav-links'>
                <Link style={NavStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link style={NavStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav