import React from 'react'
import {NavLink} from 'react-router-dom'
import Popup from 'reactjs-popup'
import SuggestFeature from './SuggestFeature.js'
import FeedbackButton from './FeedbackButton.js'

const contentStyle={
    width: '60%',
    borderRadius: '5px',
    border: 'none',
    background: 'rgb(223,232,243)',
}

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
                    <Popup
                    modal
                    closeOnDocumentClick={false}
                    contentStyle={contentStyle}
                    overlayStyle={{background:'rgb(98,106,130)'}}
                    trigger={open => <FeedbackButton open={open}/>}>

                    {close=> <SuggestFeature close={close}/>}
                    </Popup>
                </div>
                
            </div>
        );
    }
}
export default Home;