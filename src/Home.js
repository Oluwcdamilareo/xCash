import React from 'react'
import {NavLink} from 'react-router-dom'
import SuggestFeatureModal from './SuggestFeatureModal.js'
import './Home.css'

class Home extends React.Component{
    render(){
        return(
            <div id='home-content'>
                <div id="hero-message-home">
                    <h1>It's your money, you shouldn't have to line up for it</h1>
                    <p>No more ATM lines in the hot sun.</p>
                    
                </div>
                <div className='home-buttons'>
                    <div className='order-home-mobile'>{<NavLink to='/order' >Order Cash</NavLink>}</div>
                    {<NavLink className='order-home-desktop'to='/order' >Order Cash</NavLink>}
                    <SuggestFeatureModal/>             
                </div>
                
            </div>
        );
    }
}

export default Home;