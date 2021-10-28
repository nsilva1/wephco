import React from 'react'

const HowItWorks = () => {
  return (
    <div className='bg-light'>
      <div className="container">
        <div className="text-center">
          <h1 className="p-3">How It Works</h1>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center">
            <div className="col">
              <div className="text-center">
              <h6>Step 1</h6>
              <p className="">
                Create your wephco account or log in if account already exists.
              </p>
              </div>
            </div>
            <div className="col">
              <hr />
            </div>
            <div className="col">
              <div className="text-center">
              <h6>Step 2</h6>
              <p className="">Fill all forms with the necessary details</p>
              </div>
            </div>
            <div className="col">
              
              <hr />
              
            </div>
            <div className="col">
              <div className="text-center">
              <h6>Step 3</h6>
              <p className="">Confirm details entered and hit send! Your money is on its way</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
