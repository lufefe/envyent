import React from 'react';
import './Cards.css';
import '../App.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="cards_heading">Board of Directors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.generated.photos/vg5a0p99H1OW2vcHaU0GSAbYPMycPErzAQEPzNHLjE4/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2MTE3NTAuanBn.jpg'
              text='Mike Larry'
              label='Founder and CEO'

            />
            <CardItem
              src='https://images.generated.photos/QEJrIALGbpSLKrnJdWeKcU_E2WMBRZETNlFqGIafjl8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyODI1MjUuanBn.jpg'
              text='Cynthia Beck'
              label='CIO'
      
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.generated.photos/I6Qb-wlzRGzfddb_gNjHZh3ezcVQT7JERMcLFIxEwI8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3NjI0MjIuanBn.jpg'
              text='Nosipho Swazi'
              label='CFO'
          
            />
           
            <CardItem
              src='https://images.generated.photos/TVl_gxuCpWDY4ASXh0P_hKlYqW-hoB3RY2xTjnMXuEQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2ODUxMTIuanBn.jpg'
              text='Gloria Finn'
              label='COO'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.generated.photos/A0Xl0uYeDh2-ff007-LzAFDKu1UJSg22vYK4TRqfigk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4Njc5OTguanBn.jpg'
              text='Chantelle Louwren'
              label='Non-Executive Director'
              
            />
           
            <CardItem
              src='https://images.generated.photos/v3G0DCFTYj4G4SpXxzGCt5b7A-i5FXbUYmQ570h4pG0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODc1ODQuanBn.jpg'
              text='Mitch Planko'
              label='CTO'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}



export default Cards;