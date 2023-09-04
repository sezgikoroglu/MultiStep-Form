import React from 'react';
import { useState } from 'react';
import Aside from './Aside';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm = () => {

  const Steps={
    step1:{
      component: Step1,
      title:"Personal Info",
      subtitle:"Please provide your name,email and",
      hasNextButton:true,
      hasPrevButton:false,
    },
    step2:{
      component: Step2,
      title:"Select your plan",
      subtitle:"You have the option of monthly or yearly billing",
      hasNextButton:true,
      hasPrevButton:true   
    },
    step3:{
      component: Step3,
      title:"Pick add-ons",
      subtitle:"Add-ons help enhance your gaming experience.",
      hasNextButton:true,
      hasPrevButton:true    },
    step4:{
      component: Step4,
      title:"Finishing up",
      subtitle:"Double-check eveything looks OK before confirming.",
      hasNextButton:false,
      hasPrevButton:true,
      hasConfirmButton:true,
    },

  }

  const [formData,setFormData]=useState({
    step1:{},
    step2:{},
    step3:{},
  })
  const [activeStep,setActiveStep] = useState("step1");
  const ActiveStep=Steps[activeStep].component;

  const handleStepSubmit=(stepId,nextStepId,stepData)=>{
    
    setFormData({
      ...formData,
      [stepId]:stepData,
    })
    setActiveStep(nextStepId)

  }



  const handleBack=()=>{
    const currentStepNumber = Number(activeStep.slice(-1));
    setActiveStep(`step${currentStepNumber - 1}`);
  }

  return (

    <>
        <div className="container">
            <div className="c-wrapper">
                <Aside activeStep={activeStep}/>
                <ActiveStep 
                    {...Steps[activeStep]} 
                    onStepSubmit={handleStepSubmit} 
                    formData={formData}
                    onBack={handleBack}
                />
            </div>
        </div>

    </>
  )
}

export default MultiStepForm 