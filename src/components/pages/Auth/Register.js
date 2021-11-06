import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, db } from '../../../utils/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { isFormValidated } from '../../../utils/formUtils'
import { collection, addDoc } from 'firebase/firestore'
import { useToasts } from 'react-toast-notifications'

const Register = () => {
  const { addToast } = useToasts()
  let history = useHistory()

  const [loading, setLoading] = useState(false);
  const [localState, setLocalState] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    plan: 'Basic'
  })

  // API calls
  const registerUser = async(event) => {
    if(!isFormValidated('register')){
      return;
    }

    event.preventDefault()
    setLoading(true)

    createUserWithEmailAndPassword(auth, localState.email, localState.password).then((UserCredential) => {
      // const user = UserCredential.user;
      await addDoc(collection(db, 'members'), {
        email: localState.email,
        name: localState.name,
        phone: localState.phone,
        plan: localState.plan
      })
      addToast('Registration Complete. Please Log in',{appearance:'success'})
      history.push('/login')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      addToast('Bad Network Connection. Please Try Again',{appearance:'error'})
    }).finally(() => {
      setLoading(false);
    })

  }

  // local functions
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

  const clearForm = () => {
    setLocalState({
      email: '',
    password: '',
    name: '',
    phone: '',
    plan: 'Basic'
    })
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center" style={{marginTop:'100px'}}> REGISTER </h3>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 mt-5">
          <form id='register'>
                <fieldset disabled={loading}>
                  <div className="m-3">
                    <label className="form-label">Name</label>
                    <input className='form-control' required type='text' value={localState.name} onChange={handleChange('name')} />
                  </div>
                  <div className="m-3">
                    <label className="form-label">Email</label>
                    <input className='form-control' required type='email' value={localState.email} onChange={handleChange('email')} />
                  </div>
                  <div className="m-3">
                    <lable className="form-label">Phone</lable>
                    <input className='form-control' required type='text' value={localState.phone} onChange={handleChange('phone')} />
                  </div>
                  <div className="m-3">
                    <label className="form-label">Select Membership Plan</label>
                      <select className="form-select" required aria-label="Membership Plan" value={localState.plan} onChange={selectChange}>
                        <option value='Basic'>Wephco Basic</option>
                        <option value="Pro">Wephco Pro</option>
                        <option value="Deluxe">Wephco Deluxe</option>
                      </select>
                  </div>
                  <div className="m-3">
                    <button className='btn btn-primary' onClick={registerUser}>REGISTER</button>
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
