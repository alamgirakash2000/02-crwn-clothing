import React from 'react'
import './sign-in.style.css'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password : ''
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} =e.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <div className='sign-in col-md-6'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password </span>

               <form onSubmit={this.handleSubmit} className='my-4'>
                  <label labelFor='email'>Email</label>
                  <input name='email' 
                        type='email' 
                        value={this.state.email} 
                        required
                        onChange={this.handleChange}
                        />
                  <label labelFor='password'>Password</label>
                  <input name='password'
                         type ="password"
                         value={this.state.password} 
                         required
                         onChange={this.handleChange}
                         />
                  <button type='submit' value='Submit Form' className='button'>SIGN IN </button>
               </form>
            </div>
        )
    }
}


export default SignIn