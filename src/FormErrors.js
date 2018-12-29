import React from 'react';
import './index.css'

const FormErrors = ({formErrors}) =>
    <div className='form-errors'>
        {Object.keys(formErrors).map((fieldName, i)=>
        {
            if(formErrors[fieldName].length > 0){
                return(
                    <p key={i} className='form-error'>{`The ${fieldName} you entered ${formErrors[fieldName]}`}</p>
                )
            } else{
                return ''
            }
        })}
    </div>

export default FormErrors;