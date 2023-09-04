import React, { useState } from 'react'
import Step from './Step'
import FormJson from "../form.json"

const Step1 = ({onStepSubmit, ...props}) => {
  const {step1} = FormJson;
  const [form,setForm]=useState({})
  const hasError=false;

  const onSubmit=(e)=>{
   
    e.preventDefault();
    const formData=new FormData(e.target)
    const formProperties=Object.fromEntries(formData);
   
    onStepSubmit("step1","step2",formProperties)
  }


  return (
    
      <Step {...props} handleSubmit={onSubmit}> 
          <div className="step1">
            {
              step1.map(item=>(
                <div key={item.id} className="form-item">
                  <label htmlFor="">{item.label}</label>
                  <input className={hasError ? "input-error" : "" } name={item.id} type={item.type} placeholder={item.placeholder}/>
                  {
                    hasError && (
                      <p className="error">This field is required</p>
                    )
                  }
                </div>
              ))
            }
            
          </div>
      </Step>
    
  )
}

export default Step1