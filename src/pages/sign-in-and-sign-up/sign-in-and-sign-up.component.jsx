import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.style.css'

const SignInAndSignUpPage =() =>(
    <div className='sign-in-and-sign-up container'>
       <div className='row'>
          <SignIn />
          <SignUp />
       </div>
    </div>
)
export default SignInAndSignUpPage