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
              label='Director'

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
              label='Non-Executive Director'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.generated.photos/A0Xl0uYeDh2-ff007-LzAFDKu1UJSg22vYK4TRqfigk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4Njc5OTguanBn.jpg'
              text='Chantelle Louwren'
              label='Non-Executive Director'
              
            />
           
            <CardItem
              src='https://images.generated.photos/m8i09pZ0U2iZIlnHjsEPMw-M7I5cF3L9rELGmCUPNGE/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2ODkwMDYuanBn.jpg'
              text='Mitch Dhani'
              label='Non-Executive Director'
            />
          </ul>
        </div>
      </div>
      <p className="disclaimer">Disclaimer: The above pictures are A.I generated images and are used as placeholders, as well as the information provided.</p>
    </div>
  );
}



export default Cards;