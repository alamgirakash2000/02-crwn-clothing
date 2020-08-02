import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'
import './header.style.css'


const Header = () => (

    <div className='container my-4'>
        <Link to='/' className='d-md-flex justify-content-between'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link> 
            
            <div className='options my-auto'>
              <Link className='option' to='/shop'>SHOP</Link>
              <Link className='option' to='/contact'>CONTACT</Link>
              <Link className='option' to='/shop'>SHOP</Link> 
            </div>
        </Link>
    </div>

)

export default Header