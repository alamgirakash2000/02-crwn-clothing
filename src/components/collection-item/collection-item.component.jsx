import React from 'react'

import './collection-item.style.css'

const CollectionItem =({id,name,price,imageUrl}) =>(
   <div>
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                    }}
            />
            <div className='collection-footer d-flex justify-content-between'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
   </div>
)

export default CollectionItem