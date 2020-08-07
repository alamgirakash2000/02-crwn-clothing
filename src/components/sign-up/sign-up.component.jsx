import React from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.style.css'

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
           displayName: '',
            email : '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();

        const {displayName,email,password,confirmPassword}=this.state

        if(password!==confirmPassword){
            alert("Password don't match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email : '',
                password: '',
                confirmPassword: ''
            })

        }catch(error){
            console.log(error);
        }  
    }

    handleChange = event => {
        const {value, name} =event.target;
        this.setState({[name]: value})
    }
    
  

    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return (
            <div className='col-md-6'>
               <h2>I do not have an account</h2>
               <span>Sign up with your email and password </span>

               <form onSubmit={this.handleSubmit} className='my-4'>
                   <label>Name</label>
                      <input name='displayName' 
                        type='text' 
                        value={displayName} 
                        required
                        onChange={this.handleChange}
                     />   
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

                    <label>Password</label>
                    <input name='confirmPassword'
                         type ="password"
                         value={confirmPassword} 
                         required
                         onChange={this.handleChange}
                         />
                  <button type='submit' value='Submit Form' className='button'>SIGN UP</button>
               </form>
            </div>
        )
    }
}


export default SignUp