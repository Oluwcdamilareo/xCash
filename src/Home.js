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
                    <div id="button-1">{<NavLink to='/order'>Order Cash</NavLink>}</div>
                    <div id="button-2"><SuggestFeatureModal/></div>               
                </div>
                
            </div>
        );
    }
}

export default Home;