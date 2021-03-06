import React from 'react'
import FormErrors from './FormErrors';
import SuggestFeatureModal from './SuggestFeatureModal.js'
import './Order.css'

class OrderForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formValid:false,
            nameValid: false,
            addressValid: false,
            amountValid: false,
            formErrors:{name:'',address:'',amount:''}
        }
    }
    handleInput=(event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        }, this.validateField(name, value));
    }

 

    validateField(fieldName, value){
        let nameValid = this.state.nameValid
        let addressValid = this.state.addressValid
        let amountValid = this.state.amountValid
        let validationErrors = this.state.formErrors

        switch(fieldName){
            case 'name':
                nameValid = value.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)
                validationErrors.name = nameValid ? '':'is invalid'
                break;
            
            case 'address':
                addressValid = value.length > 10
                validationErrors.address = addressValid? '': 'needs to be at least 10 characters'
                break;
            case 'amount':
            amountValid = Number(value) >= Number(1000) && Number(value) < Number(50000)
            validationErrors.amount = amountValid? '': 'needs to between 1000 and 50000'
            break;
            default:
            break;
        }

    this.setState({
        nameValid:nameValid, 
        amountValid: amountValid, 
        addressValid: addressValid,
        formErrors:validationErrors
    }, )
    this.validateForm(nameValid,amountValid, addressValid)
    }

    validateForm(nameValid, addressValid, amountValid){
        this.setState({formValid: nameValid&&addressValid&&amountValid})
    }
    render(){
        return(
            <div>
                <form>
                    <FormErrors formErrors={this.state.formErrors}/>
                    <div>
                        <input name='name' placeholder="Full name" onChange={this.handleInput} value={this.state.name}/>
                    </div>
                    <div>                                    
                        <input name='address' placeholder="Address" onChange={this.handleInput} value={this.state.address}/>
                    </div>
                    <div>                                                   
                        <input name='amount' placeholder="Amount" onChange={this.handleInput} value={this.state.amount}/>                       
                    </div>
                    <div>
                        <button disabled={Boolean(!this.state.formValid)} className="form-button">Order</button>
                    </div>
                    
                    <div id="suggestion-order-form">
                        <SuggestFeatureModal />
                    </div>
                    
                </form>
            </div>
        );
    }
}

class Order extends React.Component{
 
    render(){
        return(
            <div id='order-form'>
                <div id='order-left'>
                    <h1 className='form-header'>No more ATM Lines</h1>
                    <p className='order-subheading'>Quick cash, whether you want it. You'll never stress again</p>
                    <div id="suggestion-order">
                        <SuggestFeatureModal />
                    </div>
                    </div>
                <div id='order-right'>
                    <OrderForm/>
                </div>
            </div>
        );
    }
}

export default Order;