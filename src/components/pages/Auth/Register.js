import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [localState, setLocalState] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    plan: 'Basic'
  })

  const handleChange = (input) => (event) => {
    setLocalState({
      ...localState,
      [input]: event.target.value
    })
  }

  const selectChange = (event) => {
    setLocalState({
      ...localState,
      plan: event.target.value
    })
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center" style={{marginTop:'100px'}}> REGISTER </h3>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 mt-5">
          <form>
                <fieldset>
                  <div className="m-3">
                    <label className="form-label">Name</label>
                    <input className='form-control' type='text' value={localState.name} onChange={handleChange('name')} />
                  </div>
                  <div className="m-3">
                    <label className="form-label">Email</label>
                    <input className='form-control' type='email' value={localState.email} onChange={handleChange('email')} />
                  </div>
                  <div className="m-3">
                    <lable className="form-label">Phone</lable>
                    <input className='form-control' type='text' value={localState.phone} onChange={handleChange('phone')} />
                  </div>
                  <div className="m-3">
                    <label className="form-label">Select Membership Plan</label>
                      <select className="form-select" aria-label="Membership Plan" value={localState.plan} onChange={selectChange}>
                        <option value='Basic'>Wephco Basic</option>
                        <option value="Pro">Wephco Pro</option>
                        <option value="Deluxe">Wephco Deluxe</option>
                      </select>
                  </div>
                  <div className="m-3">
                    <button className='btn btn-primary'>REGISTER</button>
                  </div>
                  <span>Already a member? <Link to='/login'> Login </Link> </span>
                </fieldset>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
