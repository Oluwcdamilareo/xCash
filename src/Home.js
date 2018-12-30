import React from 'react'
import {NavLink} from 'react-router-dom'
import SuggestFeatureModal from './SuggestFeatureModal.js'


class Home extends React.Component{
    render(){
        return(
            <div id='home-content'>
                <div id="hero-message-home">
                    <h1>It's your money, you shouldn't have to line up for it</h1>
                    <p>No more ATM lines in the hot sun.</p>
                    
                </div>
                <div className='home-buttons'>
                    
                    {<NavLink to='/order'>Order Cash</NavLink>}
                    <SuggestFeatureModal/>
                </div>
                
            </div>
        );
    }
}

export default Home;