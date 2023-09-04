import React from 'react'

const Step = ({

    onBack,
    handleSubmit,
    title,
    subtitle,
    hasNextButton,
    hasPrevButton,
    hasConfirmButton,
    children,
    hasFull,
}) => {

  return (
    <form  onSubmit={handleSubmit}  className='step' >
        
            <header>
                <div className="wrapper">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </header>
            <main>
                <div className="wrapper">
                   {children}
                </div>
            </main>
            <footer>
                <div className="wrapper">

                    {hasPrevButton && <button onClick={onBack}   className="go-back">Go Back</button>}   
                    {hasNextButton && <button type='submit'  className="next">Next Step</button>}
                    {hasConfirmButton && <button type='submit' className="next">Confirm</button>}
                   
                </div>
            </footer>
        
    </form>
  )
}

export default Step