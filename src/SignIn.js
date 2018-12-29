import React, {Component} from 'react'
import FormErrors from './FormErrors.js'

class SignInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValid: false,
            formErrors: {email:'', password:''},
            passwordValid: false,
            formValid: false
        }
    }

    validateField(fieldName,value){
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid
        let fieldValidationErrors = this.state.formErrors

        switch(fieldName){
            case 'email':
                emailValid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                fieldValidationErrors.email = emailValid ? '' : 'is invalid'
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)
                fieldValidationErrors.password = passwordValid ? '' : 'needs to include: 1 Lowercase and Uppercase character, one number and be atleast 6 characters long'
                break;
            default:
                break;
        }

        this.setState({emailValid: emailValid,
        passwordValid: passwordValid,
        formErrors: fieldValidationErrors, },this.validateForm(emailValid,passwordValid))

        
    }

    validateForm(e,p){
        this.setState({formValid: e && p})
    }

    handleInput = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]:value},() => {this.validateField(name,value)});
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
    }

    render(){
        const {email,password} = this.state
        return(
            <div>
                <div className="form-error-container">
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div>
                <form>
                    
                    <div>          
                        <label>
                            <input onChange={this.handleInput} name='email' placeholder="Email Address" value ={email}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            
                            <input autocomplete='off' onChange={this.handleInput} name='password' placeholder="Password" value={password}/>
                        </label>
                    </div>
                    <div>
                        <button disabled={Boolean(!this.state.formValid)} onClick={this.handleSubmit} className='submit-button form-button' >Sign In</button>
                    </div>
                    
                    
                    
                </form>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
            </div>
        );
    }
}

class SignIn extends React.Component{
    render(){
        return(
            <div id="login-container" className ="form">
            <div>
                <h1 className='form-header'>Sign in to xCash</h1>
                <p className='form-subheading'>Avoid stressful lines and unreliable ATM machines forever</p>
            </div>
                
                <div>
                    <SignInForm />
                </div>
            </div>
            
            
        );
    }
}
export default SignIn;