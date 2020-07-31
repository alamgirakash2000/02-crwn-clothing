import React from 'react'
import './homepage.style.css'

const Homepage = () => (
    <div className='homepage container'>
        <div className='directory-menu row'>
          <div className='col-md-4'>
            <div className='menu-item'>
                <div className='content'>
                   <h1 className='title'>HATS</h1>
                   <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
           </div>
 
           <div className='col-md-4'>   
           <div className='menu-item'>
              <div className='content'>
                 <h1 className='title'>JACKETS</h1>
                 <span className='subtitle'>SHOP NOW</span>
             </div>
           </div>
           </div>

           <div className='col-md-4'>
           <div className='menu-item'>
               <div className='content'>
                  <h1 className='title'>SNEAKERS</h1>
                  <span className='subtitle'>SHOP NOW</span>
               </div>
           </div>
           </div>

          <div className='col-md-6'>
           <div className='menu-item'>
               <div className='content'>
                  <h1 className='title'>WOMENS</h1>
                  <span className='subtitle'>SHOP NOW</span>
               </div>
           </div>
          </div>

          <div className='col-md-6'>
           <div className='menu-item'>
              <div className='content'>
                 <h1 className='title'>MEANS</h1>
                 <span className='subtitle'>SHOP NOW</span>
              </div>
           </div>
          </div>

        </div>
    </div>
)

export default Homepage