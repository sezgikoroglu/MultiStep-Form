import React from 'react'

const Aside = ({activeStep}) => {
    
    const Items=[
        {
            id:"step1",
            number:"1",
            subtitle:"step 1",
            title:"your info"
        },
        {
            id:"step2",
            number:"2",
            subtitle:"step 2",
            title:"select plan"
        },
        {
            id:"step3",
            number:"3",
            subtitle:"step 3",
            title:"add-ons"
        },{
            id:"step4",
            number:"4",
            subtitle:"step 4",
            title:"summary"
        }
    ]

    

  return (
    <aside>
        <div className="wrapper">
        {
            Items.map((item,index)=>(
                
                <div className="item" key={item.id}>
                    <div className={item.id===activeStep ? "itemNumber full" : "itemNumber"}>
                        <span>{item.number}</span>
                    </div>
                    <div className="item-body">
                        <div className="subtitle">{item.subtitle}</div>
                        <div className="title">{item.title}</div>
                    </div>
                </div>
            ))
        }
        </div>
    </aside>
  )
}

export default Aside;