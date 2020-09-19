import React from 'react';
import '../../App.css';
import './About.css';
import dashboard from '../../images/dashboard.svg';

 function About() {
  return(
    
    <div className="about-page">
    { window.scrollTo({ top: 0, left: 100, behavior: 'smooth'})}
    {/* About */}
      <div className="home__hero-section">
        <div className="container">
          <div className="row home_hero-row" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="col">
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>
                  <h1 className="heading dark"> About Us  </h1>
                  <p className="home__hero-subtitle dark">
                    Envy Enterprises (Pty) Ltd. is a tech holdings company that is comprised of cutting edge technology subsidairies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className='home__hero-img-wrapper'>
                <img src={dashboard} alt='dashboard' className='home__hero-img' />
            </div>
            </div>
          </div>
        </div>
      </div>

       {/* Mission */}

      <div className="home__hero-section darkBg" id="mission">
        <div className="container">
          <div className="row home_hero-row" style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <div className="col">
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>
                  <h1 className="heading "> Mission  </h1>
                  <p className="home__hero-subtitle">
                    Envy Enterprises (Pty) Ltd. is a tech holdings company that is comprised of cutting edge technology subsidairies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className='home__hero-img-wrapper'>
                <img src={dashboard} alt='dashboard' className='home__hero-img' />
            </div>
            </div>
          </div>
        </div>
      </div>

   {/* Values */}

      <div className="home__hero-section" id="values">
        <div className="container">
          <div className="row home_hero-row" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="col">
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>
                  <h1 className="heading dark"> Values </h1>
                  <p className="home__hero-subtitle dark">
                    Envy Enterprises (Pty) Ltd. is a tech holdings company that is comprised of cutting edge technology subsidairies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className='home__hero-img-wrapper'>
                <img src={dashboard} alt='dashboard' className='home__hero-img' />
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default About;