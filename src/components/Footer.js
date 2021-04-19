import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

const ToTop = () => {
   window.scrollTo({ top: 0, left: 100, behavior: 'smooth'});
};

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Sign up for a newsletter to get notified about any news on e-Health.
                </p>
                <p className="footer-subscription-text">
                    You may unsubscribe anytime.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your email' className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Blorema &copy;</Link>
            <Link to='/'>Patrema &copy;</Link>
            <Link to='/'>Vetrema &copy;</Link>
          </div>
         
          <div className='footer-link-items'>
            <h2>Support</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Site Map</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>Careers</Link>
//            <Link to='/'>Investors</Link>
            <Link to='/'>Legal</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Resources </h2>
            <Link to='/'>News</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>e-Health</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            {/* TODO -> Configure button */}
            <Button onClick={ToTop}>
              To top
            </Button>
          </div>
          <small className='website-rights'>Envy Enterprises (Pty) Ltd. © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>

    )
}

export default Footer
