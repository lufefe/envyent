import React from 'react';
import '../App.css';
import './HeroSection.css';
import ReactTypingEffect from 'react-typing-effect';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted>
                <source src='/videos/video6.mp4' type='video/mp4'/>
            </video>
            
            <p className="typing">
            <ReactTypingEffect
                text = {["Reimagine a world so safe and technological advanced...", "a world where your data is yours and yours only", "That right there, is our goal at Envy Enterprises."]}
                speed="90"
                eraseDelay="4000"
                typingDelay="1500"
            />
            </p>
        </div>
    )
};

export default HeroSection;