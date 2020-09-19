import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const iframe = '<iframe src="https://www.google.com/maps/embed/v1/search?q=Waterfall%20Heights.%2C%20Jason%20Close%2C%20Vorna%20Valley%2C%20Midrand%2C%20South%20Africa&key=AIzaSyAuuYFAUPeNRAdfFVIiZkbHX0lretDXgJk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'; 

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

function Contact() {
  return(
	  <section id="contact">
	
    	<div className="social">
        <Link to="/"><i className="fab fa-facebook-f"></i></Link>
        <Link to="/"><i className="fab fa-twitter"></i></Link>
        <Link to="/"><i className="fab fa-instagram"></i></Link>
        <Link to="/"><i class="fab fa-linkedin-in"></i></Link>
        <Link to="/"><i class="fab fa-youtube"></i></Link>
        
      </div>

      <div className="contact-box">
        <div className="c-heading">
          <h1>Get In Touch</h1>
          <p>Call Or Email Us Regarding Question Or Issues</p>
        </div>

        <div className="c-inputs">
          <form>
            <input type="text" placeholder="Full Name"/>	
            <input type="email" placeholder="example@gmail.com"/>
            <textarea name="message" placeholder="Write Message"></textarea>
            <button>SEND</button>
          </form>
        </div>
      </div>
      <div className="map">
        <Iframe iframe={iframe} />
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.5252574812218!2d74.31603229143637!3d31.46779655679461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906abd2d8f2db%3A0x2d4bd93a1eb25b41!2sArfa%20Technologies!5e0!3m2!1sen!2s!4v1596774150754!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>	 */}
      </div>
	</section>
  );
}

export default Contact;