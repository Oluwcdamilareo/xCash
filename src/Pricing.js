import React, {Component} from 'react'

export default ({close}) =>(
    <div>
        <div className='pricing-header'>
            <h3>Pricing and fees</h3>
        </div>
        <div className='pricing-content'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>
        <div className='pricing-footer'>
            <label>
                Please note that pricing is subject to change
                <button onClick={close}>close</button>
            </label>

        </div>
    </div>
)