import React from 'react'
import {withRouter} from 'react-router-dom'

const MenuItem =({title,imgUrl,cls,history,match})=>(
    <div className={`${cls}`} onClick={()=> history.push(`${match.url}${title}`)}>
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

export default withRouter(MenuItem)