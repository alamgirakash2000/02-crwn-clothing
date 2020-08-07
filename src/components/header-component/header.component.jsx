import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import './header.style.css'


const Header = ({currentUser}) => (
    <div className='container my-4'>
        <div className='d-md-flex justify-content-between'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link> 
            
            <div className='options my-auto'>
               <Link className='option' to='/shop'>SHOP</Link>
               <Link className='option' to='/contact'>CONTACT</Link>
                 { 
                currentUser? (
                    <a className='option' onClick={() => auth.signOut()}>SIGN OUT</a>
                  ):(
                    <Link className='option' to='/signin'>SIGN IN</Link> 
                  )
                 }
            </div>
        </div>
    </div>
)

export default Header