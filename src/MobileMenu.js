import React from 'react'
import {NavLink} from 'react-router-dom'
import './MobileMenu.css'

export default ({close}) => (
    <div className='menu'>
        <ul>
            <li onClick={close}>
                <NavLink exact to='/'>Home</NavLink>
            </li>
            <li onClick={close}>
                <NavLink to='/order'>Order</NavLink>
            </li>
            <li onClick={close}>
                <NavLink to='/sign-in'>Sign In</NavLink>
            </li>
            
            <li onClick={close}>
                <NavLink to='/sign-up'>Sign up</NavLink>
            </li>
        </ul>
    </div>
);