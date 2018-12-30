import React, {Component} from 'react'
import './Pricing.css'

export default ({close}) =>(
    <div>
        <div className='pricing-header'>
            <h3>Pricing and fees</h3>
        </div>
        <div className='pricing-content'>
            <ul>
                <li><span>&#8358;</span>1000-3000 (<span>&#8358;</span>100)</li>
                <hr style={{width:'40px'}}></hr>
                <li>4000-9000 (<span>&#8358;</span>200)</li>
                <hr style={{width:'40px'}}></hr>
                <li><span>&#8358;</span>10000-15000 (<span>&#8358;</span>400)</li>
                <hr style={{width:'40px'}}></hr>
                <li><span>&#8358;</span>15000-20000 (<span>&#8358;</span>500)</li>
                <hr style={{width:'40px'}}></hr>
                <li><span>&#8358;</span>20000+ (<span>&#8358;</span>700)</li>
            </ul>

        </div>
        <div className='pricing-footer'>
            <label>
                Please note that pricing is subject to change
                <button onClick={close} className='pricing-footer-button'>close</button>
            </label>

        </div>
    </div>
)