import React, { useState } from 'react'
import Step from './Step'
import FormJson from "../form.json"
import ArcadeIcon from "../assests/icon-arcade.svg"
import AdvancedIcon from "../assests/icon-advanced.svg"
import ProIcon from "../assests/icon-pro.svg"

const {step2} = FormJson;

const Icons={
  1:ArcadeIcon,
  2:AdvancedIcon,
  3:ProIcon
};

const DEFAULT_PLAN={id:1,title:"Arcade"}
const DEFAULT_BILLING="monthly";


const Step2 = ({onStepSubmit, formData, ...props}) => {
 
  const [plan,setPlan]=useState(formData.step2.plan ?? DEFAULT_PLAN);
  const [billingType,setBillingType]=useState(formData.step2.billingType ?? DEFAULT_BILLING)
  

  const changeBillingType=(type)=>{
    setBillingType(type)
  }

  const changePlan = (newPlan) => {
    setPlan(newPlan);
    
  };

  const onSubmit=()=>{
    onStepSubmit("step2","step3",{plan,billingType})
  }

  return (
    <>
      <Step {...props} handleSubmit={onSubmit}> 
          <div className="step2">

              <div className="options">
                
                {step2[billingType].map(item=>(
                    <label key={item.id} className={(item.id === plan.id ? "label label--selected" : "label")}  onClick={()=>changePlan(item)} >
                    <input type="text" />
                    <img src={Icons[item.id]} alt="" />
                    <div className='title'>{item.title}</div>
                    <div className='subtitle'>{item.price}</div>
                    {
                      item.description && <div className='description'>{item.description}</div>
                    }
                  </label>
                ))}
              </div>
              <div className="time-options">
                <button type='button' className={(billingType === "monthly" ? "button button--selected" : "button")} onClick={()=>changeBillingType("monthly")}>
                  Monthly
                </button>
                <button type='button' className={(billingType === "yearly" ? "button button--selected" : "button")} onClick={()=>changeBillingType("yearly")} >Yearly</button>
              </div>
           
            
          </div>
      </Step>
    </>
  )
}

export default Step2