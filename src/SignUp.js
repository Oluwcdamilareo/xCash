import React, {Component} from 'react'
import FormErrors from './FormErrors.js'

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: '',
            confirmation: '',
            formValid: false,
            emailValid: false,
            passwordValid: false,
            ConfirmationValid:'',
            fullNameValid: false,
            formErrors:{Email:'',Password:'',Name:'', Confirmation: ''}

        }

        
    }
    handleInput = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value}, () => {this.validateField(name,value)})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
    }

    validateField(fieldName,value){
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid
        let fieldValidationErrors = this.state.formErrors
        let fullNameValid = this.state.fullNameValid
        let Confirmation = this.state.ConfirmationValid
        let password = this.state.password

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                fieldValidationErrors.email = emailValid ? '' : 'is invalid'
                break;
            case 'fullname':
                fullNameValid = value.match(/^[A-Z][a-z]+\s[A-Z][a-z]+$/)
                fieldValidationErrors.Name = fullNameValid ? '' : 'is invalid'
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)
                fieldValidationErrors.password = passwordValid ? '' : 'needs to include: 1 Lowercase and Uppercase character, one number and be atleast 6 characters long'
                break;
            case 'confirmation':
                Confirmation = Boolean(value === password) ? true : false
                fieldValidationErrors.Confirmation = Confirmation ? true : 'needs to be the same as your password'
                break;
            default:
                break;
        }

        this.setState({
            emailValid: emailValid, passwordValid:passwordValid,
            formErrors: fieldValidationErrors,fullNameValid: fullNameValid, ConfirmationValid: Confirmation,
            formValid : (passwordValid&&fullNameValid&&Confirmation&&emailValid)})

        
        
    }


    render(){
        return(
            <div>
                <div className="form-error-container">
                        <FormErrors formErrors={this.state.formErrors}/>
                </div>
                <form>
                    <div>
                        <input name='fullname' placeholder="Full Name" onChange ={this.handleInput} value={this.state.fullname}/>
                    </div>
                    <div>
                        <input name='email' placeholder="Email Address"  onChange ={this.handleInput} value = {this.state.email}/>
                    </div>
                    <div>    
                        <input type="password" name='password' autoComplete='off' placeholder="Password"  onChange ={this.handleInput} value={this.state.password}/>
                    </div>
                    <div>    
                        <input type="password" name='confirmation' autoComplete ='off' placeholder='Password Confirmation' onChange={this.handleInput} value={this.state.confirmation}/>
                    </div>
                    <div>
                        <button disabled={Boolean(!this.state.formValid)} className='submit-button form-button'>Sign up</button>
                    </div>                                                          
                </form>
            </div>
        );
    }
}

class SignUp extends React.Component{
    
    render(){
        return(
            <div className='form'>
            <h1 className='form-header'>Sign up to xCash</h1>
            <p className='form-subheading'>Forget about ATM stops. Order money and get it wherever you're going</p>
                <SignUpForm/>
            </div>
        );
    }
}
export default SignUp;