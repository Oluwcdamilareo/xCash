import React from 'react'
import {NavLink} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Pricing from './Pricing.js'
import PricingLink from './PricingLink.js'

export default () => (
    <div className='nav-bar'>
        <NavLink to='/order'>Order</NavLink>
        <Popup
        modal
        trigger={open=><PricingLink open={open}/>}>
            {close => <Pricing close={close}/>}
        </Popup>
        <NavLink to='/sign-in'>Sign in</NavLink>
        <NavLink to='/sign-up' id='sign-up'>Sign up</NavLink>
    </div>
)