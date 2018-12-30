import React, {Component} from 'react'
import Popup from 'reactjs-popup'
import SuggestFeature from './SuggestFeature.js'
import FeedbackButton from './FeedbackButton.js'

const contentStyle={
    width: '60%',
    borderRadius: '5px',
    border: 'none',
    background: 'rgb(223,232,243)',
}

class SuggestFeatureModal extends Component{
    render(){
        return(
        <Popup
            modal
            closeOnDocumentClick={false}
            contentStyle={contentStyle}
            overlayStyle={{background:'rgb(98,106,130)'}}
            trigger={open => <FeedbackButton open={open}/>}>
    
            {close=> <SuggestFeature close={close}/>}
        </Popup>
        )
    }
    
}

export default SuggestFeatureModal;