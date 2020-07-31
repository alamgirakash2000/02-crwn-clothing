import React from 'react'
import MenuItem from '../menu-item/menu-item.component'


class Directory extends React.Component{
    constructor(){
        super();

        this.state= {
            sections: [{
                title: 'hats',
                class: 'col-md-4',
                imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'jackets',
                class: 'col-md-4',
                imgUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'sneakers',
                class: 'col-md-4',
                imgUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'womens',
                class: 'col-md-6',
                imgUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4
            },
            {
                title: 'mens',
                class: 'col-md-6',
                imgUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                id: 5
            }
        ]}
    }

    render(){
        return (
            <div className='directory-menu row'>
              {
                  this.state.sections.map(section => (
                      <MenuItem 
                          title={section.title} 
                            key={section.id}
                            imgUrl={section.imgUrl}
                            cls={section.class}
                            />
                  ))
              }
            </div>
        )
    }
}

export default Directory