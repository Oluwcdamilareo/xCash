import React from 'react'
import {NavLink} from 'react-router-dom'
import PricingModal from './PricingModal.js'

const contentStyle ={
    background: "rgb(4, 105, 182)",
    border: 'none',
    borderRadius: '5px',
    padding: '20px'
}
export default () => (
    <div className='nav-bar'>
        <NavLink to='/order'>Order</NavLink>
        <PricingModal/>
        <NavLink to='/sign-in'>Sign in</NavLink>
        <NavLink to='/sign-up' id='sign-up'>Sign up</NavLink>
    </div>
)