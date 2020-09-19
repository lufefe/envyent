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
              path='/services'
            />
            <CardItem
              src='https://images.generated.photos/QEJrIALGbpSLKrnJdWeKcU_E2WMBRZETNlFqGIafjl8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyODI1MjUuanBn.jpg'
              text='Cynthia Beck'
              label='CIO'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.generated.photos/I6Qb-wlzRGzfddb_gNjHZh3ezcVQT7JERMcLFIxEwI8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3NjI0MjIuanBn.jpg'
              text='Nosipho Swazi'
              label='CFO'
              path='/services'
            />
            <CardItem
              src='https://images.generated.photos/v3G0DCFTYj4G4SpXxzGCt5b7A-i5FXbUYmQ570h4pG0/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODc1ODQuanBn.jpg'
              text='Mitch Planko'
              label='Strategic Advisor'
              path='/products'
            />
            <CardItem
              src='https://images.generated.photos/TVl_gxuCpWDY4ASXh0P_hKlYqW-hoB3RY2xTjnMXuEQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2ODUxMTIuanBn.jpg'
              text='Gloria Finn'
              label='Non-Executive Director'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;