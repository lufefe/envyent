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
                    Envy Enterprises (Pty) Ltd. is a tech holdings company that is comprised of cutting edge subsidiaries solving problems across multiple industries. <br/><br/>
                    We focus mainly on e-Health, using the latest technologies to solve problems in healthcare systems. We also provide solutions and/or products in the following realms: CyberSecurity, A.I, Cloud and Data Mining.
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
                    Our mission is to build an ecosystem of technologies that serves humanity's needs. Ours is to create a world where we are in control of our data and the use of technology is inherent to our being.
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
                    We pride ourselves in three values: 
                    <ul className="values-list">
                      <li>Integrity</li>
                      <li>Innovation</li>
                      <li>Transparency</li>
                    </ul>
                    <br/>
                    Simply put, we believe in innovation that ensures integrity of user data and transparency in policies and insights.
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