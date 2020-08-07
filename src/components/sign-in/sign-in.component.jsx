import React from 'react'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import './sign-in.style.css'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password : ''
        }
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        
        const {email, password} =this.state

        try{
            auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        }catch(error){
            console.log(error)
        }
    }

    handleChange = e => {
        const {value, name} =e.target;
        this.setState({[name]: value})
    }
    
    render(){
        const {email, password} =this.state
        
        return (
            <div className='col-md-6'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password </span>

               <form onSubmit={this.handleSubmit} className='my-4'>
                  <label>Email</label>
                  <input name='email' 
                        type='email' 
                        value={email}
                        required
                        onChange={this.handleChange}
                        />
                  <label>Password</label>
                  <input name='password'
                         type ="password"
                         value={password} 
                         required
                         onChange={this.handleChange}
                         />
                  <button type='submit' value='Submit Form' className='button'>SIGN IN </button>
                  <button onClick={signInWithGoogle} value='Submit Form' className='button blue ml-sm-5 mt-4'>Sign in with Google</button>
               </form>
            </div>
        )
    }
}


export default SignIn