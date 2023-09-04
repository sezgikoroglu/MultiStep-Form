import React, { useEffect } from 'react'
import Step from './Step'
import FormJson from "../form.json"
import { useState } from 'react';

const {step3} = FormJson;

const Step3 = ({onStepSubmit, formData, ...props}) => {

  
  const [billingType,setBillingType]=useState(formData.step2.billingType )
  const [selectedAddons,setSelectedAddons]=useState(formData.step3.selectedAddons || [] )

  const changeSelectedAddons=(checked,selectedAddon)=>{
   
    if(checked){
      setSelectedAddons([...selectedAddons,
      selectedAddon])
    }else{
      setSelectedAddons(selectedAddons.filter((addon)=>addon.id!==selectedAddon.id))
    }
  }

  const checkedSelected=(id)=>selectedAddons.some((addon) => addon.id === id)

  const onSubmit=()=>{
    onStepSubmit("step3","step4",{selectedAddons})
  }

  return (
    <Step {...props} handleSubmit={onSubmit} >
      
      <div className="step3">
        <div className="options">
        {step3[billingType].map(item=>(
                  <label key={item.id} className={checkedSelected(item.id) ? "label label--selected" : "label"} >
                    <input 
                      type="checkbox" 
                      onChange={(e) => changeSelectedAddons(e.target.checked, item) }
                      defaultChecked={checkedSelected(item.id)}
                    />
                    <div className="content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                    <p>{item.price}</p>
                  </label>
          ))}
        </div>
      </div>
    
    </Step>  
  )
}

export default Step3