import React from 'react'
import './SuggestFeature.css'
import FormErrors from './FormErrors.js'

class SuggestFeature extends React.Component{  
    constructor(props){
        super(props);
        this.state={
            name: '',
            suggestion: '',
            suggestionValid: false,
            nameValid:false,
            formErrors:{
                name:'',
                suggestion:''
            },
            formValid: false
        }
    }

    handleInput=(event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]:value}, this.validateField(name, value))
    }



    validateField(fieldName, value){
        let nameValid = this.state.nameValid
        let suggestionValid = this.state.suggestionValid
        let validationErrors = this.state.formErrors

        switch(fieldName){
            case 'name':
                nameValid = value.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)
                validationErrors.name = nameValid ? '':'is invalid'
                break;
            
            case 'suggestion':
                suggestionValid = value.length >= 5
                validationErrors.suggestion = suggestionValid? '': 'needs to be at least 10 characters'
                break;
            default:
            break;
        }

    this.setState({
        nameValid:nameValid,
        suggestionValid:suggestionValid,
        formErrors:validationErrors
    }, this.validateForm(nameValid,suggestionValid))

    }
    validateForm(nameValid,suggestionValid){
        this.setState({formValid: nameValid&&suggestionValid})
    }

    render(){
        const {close} = this.props
        return(
            
            <div className='suggest-feature'>
                <FormErrors formErrors={this.state.formErrors}/>
                <h1>Your feedback is important to us.</h1>
                <p>We are committed to building a better product for you. Help us.</p>
                <ul>
                    <li>
                        <input name='name' placeholder='Name' className='suggest-input' value={this.state.name} onChange={this.handleInput}/>
                    </li>
                    <li>
                        <input name='suggestion' autoComplete="off" className="suggestion suggest-input " value={this.state.suggestion} onChange={this.handleInput} placeholder='Suggestion'/>
                    </li>
                    <li className='suggestion-buttons'>
                        <button onClick={close} className='close-suggestion'>Close</button>
                        <button onClick={close} className='submit-suggestion'  disabled={Boolean(!this.state.formValid)}>Submit</button>
                    </li>
                </ul>
            </div>
        );
        

    }
    
}

export default SuggestFeature;