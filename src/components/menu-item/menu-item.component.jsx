import React from 'react'

const MenuItem =({title,imgUrl,cls})=>(
    <div className={`${cls}`}>
      <div className='menu-item' style={{
          backgroundImage: `url(${imgUrl})`
      }}>
        <div className='content'>
           <h3 className='title'>{title.toUpperCase()}</h3>
           <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
)

export default MenuItem