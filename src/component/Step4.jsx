import React from 'react'
import Step from './Step'

const Step4 = ({formData,...props}) => {


  console.log(formData)
  const { billingType, plan } = formData.step2;
  const selectedAddons=formData.step3.selectedAddons; 
 
  return (

    <Step {...props}>
      <div className="step4">
          <div className="content">
              <div className='c-item-01 plan'>
                <h4>{plan.title} ({billingType}) </h4>
                <h6>{plan.price}</h6>
              </div>
              {
                selectedAddons?.map(item=>
                  <div key={item.id} className='c-item-01 addons'>
                      <h4 >{item.title} </h4>
                      <h6>{item.price}</h6>
                  </div>
                  )
              }
              <div className='total'>
                <h4 >Total</h4>
                <h6 className="totalAmount">
                    +$ 
                    {selectedAddons.reduce(
                        (acc, curr) => acc + curr.priceAmount,
                        plan.priceAmount
                    )}
                </h6>
              </div>
          </div>
      </div>
    </Step>
  )
}

export default Step4