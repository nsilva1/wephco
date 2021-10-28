import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { db } from '../../../utils/firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore'
 
const Login = () => {
 
 const [localState, setLocalState] = useState({
   email: '',
   password: ''
 })

 const handleChange = (input) => (event) => {
   setLocalState({
     ...localState,
     [input]: event.target.value
   })
 }
 
 return (
   <>
     <div className="container">
       <h3 className="text-center" style={{marginTop:'100px'}}>LOGIN</h3>
       <div className="row d-flex justify-content-center align-items-center">
         <div className="col-md-4 col-sm-6 mt-5">
         <form>
               <fieldset>
                 <div className="m-3">
                   <label className="form-label">Email</label>
                   <input className='form-control' type='email' value={localState.email} onChange={handleChange('email')} />
                 </div>
                 <div className="m-3">
                   <lable className="form-label">Password</lable>
                   <input className='form-control' type='password' value={localState.password} onChange={handleChange('password')} />
                 </div>
                 <div className="m-3">
                   <button className='btn btn-primary'>LOGIN</button>
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