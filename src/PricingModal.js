import React, {Component} from 'react'
import Popup from 'reactjs-popup'
import Pricing from './Pricing.js'
import PricingLink from './PricingLink.js'

const contentStyle ={
    background: "rgb(4, 105, 182)",
    border: 'none',
    borderRadius: '5px',
    width: '70%',
    height:'70%'
}

class PricingModal extends Component{
    render(){
        return(
            <Popup
                modal
                trigger={open=><PricingLink open={open} />}
                contentStyle ={contentStyle}
                overlayStyle={{background:'rgba(255,255,255,.9'}}>
                
                {close => <Pricing close={close}/>}
            </Popup>
        )
    }
}     

export default PricingModal;