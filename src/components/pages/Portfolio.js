import React from 'react';
import '../../App.css';
import './Portfolio.css';
import portfolio from '../../images/envyent_family.png';
import blorema from '../../images/DonatioShop.png';
import pricepieper from '../../images/pp500.png';
import vetrema from '../../images/vtrm_logo.png';
import patrema from '../../images/ptrm_trans.png';
import { Link } from 'react-router-dom';


function Portfolio() {
  return (
    <div className = "portfolio-container">

      <div className="porfolio-image">
        <img src={portfolio} alt="portfolio"/>
      </div>

      {/* Blorema */}
      <div className="portfolio-wrapper">
        <div className="portfolio-content">
          <div className="portfolio-inner">
            <div className="sub-logo">
            <Link to="#" className="sub-logo-link">
              <img src={blorema} alt="subsidiary" className="sub-logo-image"/>
            </Link>
            </div>
            <div className="sub-description">
              <p className="sub-text">
                CEO | Ayabonga Jumba <br/>
                HEADQUARTERS | Johannesburg, South Africa <br/>
                FOUNDED | 2019 <br/><br/>

                VISION | Providing secure and easy ways to manage blood donation records and data. <br/><br/>

                Blorema is an Electronic Health Records (EHR) management application focusing on blood donation records.  <br/><br/>

              </p>
              <hr/>
            </div>
          </div>
        </div>
      </div>


      {/* PricePieper */}
      <div className="portfolio-wrapper">
        <div className="portfolio-content">
          <div className="portfolio-inner">
            <div className="sub-logo">
            <Link to="#" className="sub-logo-link">
                <img src={pricepieper} alt="subsidiary" className="sub-logo-image"/>
              </Link>
            </div>
            <div className="sub-description">
              <p className="sub-text">
              CEO | Ayabonga Jumba <br/>
                HEADQUARTERS | Johannesburg, South Africa <br/>
                FOUNDED | 2020 <br/><br/>

                VISION | Providing an ubiquitous platform for comparing prices of pharmacuetical products and anything health-related. <br/><br/>

                Price Pieper a price comparison website that uses A.I to find the best deals on pharmacuetical products for you.  <br/><br/>
              </p>
              <hr/> 
            </div>
          </div>
        </div>
      </div>


    {/* Vetrema */}
      <div className="portfolio-wrapper">
        <div className="portfolio-content">
          <div className="portfolio-inner">
            <div className="sub-logo">
              <Link to="#" className="sub-logo-link">
                <img src={vetrema} alt="subsidiary" className="sub-logo-image"/>
              </Link>
            </div>
            <div className="sub-description">
              <p className="sub-text">
              CEO | Ayabonga Jumba <br/>
                HEADQUARTERS | Johannesburg, South Africa <br/>
                FOUNDED | 2021 <br/><br/>

                VISION | Providing secure and easy ways to manage vet records and data. <br/><br/>

                Vetrema is an Electronic Health Records (EHR) management application focusing on Veterinarian records.  <br/><br/>
              </p>
             
            </div>
          </div>
        </div>
      </div>

    {/* Patrema */}
      <div className="portfolio-wrapper">
        <div className="portfolio-content">
          <div className="portfolio-inner">
            <div className="sub-logo">
            <Link to="#" className="sub-logo-link">
                <img src={patrema} alt="subsidiary" className="sub-logo-image"/>
              </Link>
            </div>
            <div className="sub-description">
              <p className="sub-text">
              CEO | Ayabonga Jumba <br/>
                HEADQUARTERS | Johannesburg, South Africa <br/>
                FOUNDED | 2018 <br/><br/>

                VISION | Providing secure and easy ways to manage patien health records and data. <br/><br/>

                Patrema is an Electronic Health Records (EHR) management application focusing on patient health records.  <br/><br/>
              </p>
              <hr/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio;