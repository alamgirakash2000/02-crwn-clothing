import React from 'react'
import './collection-preview.style.css'
import '../menu-item/menu-item.component'
import CollectionItem from '../collection-item/collection-item.component'



const CollectionPreview =({title, items}) =>(
    <div className='collection-preview container my-5'>
       <h2 className='title'>{title.toUpperCase()}</h2>
       <div className='preview row'>
          {
              items.filter((item,index) => index<4).map(({id,...otherItemProps}) =>(
                  <CollectionItem key={id} className='col-lg-3 col-md-4 col-sm-6' {...otherItemProps} />
              ))
          }
       
       </div>
    </div>
)

export default CollectionPreview