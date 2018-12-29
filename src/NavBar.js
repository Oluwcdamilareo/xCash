import React from 'react'
import {NavLink} from 'react-router-dom'

export default () => (
    <div className='nav-bar'>
        <NavLink to='/order'>Order</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/sign-in'>Sign in</NavLink>
        <NavLink to='/sign-up' id='sign-up'>Sign up</NavLink>
    </div>
)