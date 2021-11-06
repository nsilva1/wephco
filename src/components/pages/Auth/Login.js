import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, db } from '../../../utils/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { isFormValidated } from '../../../utils/formUtils'
import { doc, getDoc } from 'firebase/firestore'
import { useToasts } from 'react-toast-notifications'
import { AppContext } from '../../../context/AppState'

const Login = () => {
  const { changeState } = useContext(AppContext)

  const { addToast } = useToasts()
  let history = useHistory()

  const [loading, setLoading] = useState(false);
  const [localState, setLocalState] = useState({
    email: '',
    password: ''
  })

  // API calls
  const signIn = (event) => {
    // check all required fields are filled
    if(!isFormValidated('login-form')){
      return;
    }

    event.preventDefault()
    setLoading(true);

    // sign-in user
    signInWithEmailAndPassword(auth, localState.email, localState.password).then((UserCredential) => {
      // get user data and save to context.
      const user = UserCredential.user
      const docRef = doc(db, 'members', user.uid)
      const docSnap = getDoc(docRef)

      if(docSnap.exists()){
        const userData = docSnap.data();
        changeState('name',userData.name)
        changeState('email',userData.email)
        changeState('isAuthenticated',true)
        history.push('/transaction-details')
      } else {
        addToast('User does not exist. Please register')
        history.push('/register')
      }
    }).catch((_error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      addToast('Bad Network Connection. Please Try Again',{appearance:'error'})
    }).finally(() => {
      setLoading(false)
      clearForm()
    })
  }

  // Local functions
  const handleChange = (input) => (event) => {
    setLocalState({
      ...localState,
      [input]: event.target.value
    })
  }

  const clearForm = () => {
    setLocalState({
      email: '',
    password: ''
    })
  }

  return (
    <>
      <div className="container">
        <h3 className="text-center" style={{marginTop:'100px'}}>LOGIN</h3>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4 col-sm-6 mt-5">
          <form id='login-form'>
                <fieldset disabled={loading}>
                  <div className="m-3">
                    <label className="form-label">Email</label>
                    <input className='form-control' type='email' value={localState.email} onChange={handleChange('email')} />
                  </div>
                  <div className="m-3">
                    <lable className="form-label">Password</lable>
                    <input className='form-control' type='password' value={localState.password} onChange={handleChange('password')} />
                  </div>
                  <div className="m-3">
                    <button className='btn btn-primary' onClick={signIn}>LOGIN</button>
                  </div>
                  <span>Not a member? <Link to='/register'> Register </Link> </span>
                </fieldset>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
