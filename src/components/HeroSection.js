import React from 'react';
import '../App.css';
import './HeroSection.css';
import ReactTypingEffect from 'react-typing-effect';


function HeroSection() {
    return (
        <div className='hero-container'>
            { window.scrollTo({ top: 0, left: 100, behavior: 'smooth'})}
            <video autoPlay loop muted>
                <source src='/videos/video6.mp4' type='video/mp4'/>
            </video>
            
            <p className="typing">
            <ReactTypingEffect
                text = {["Reimagine a world so safe and technological advanced..", "a world where your data is yours and yours only!"]}
                speed="200"
                eraseDelay="4000"
                typingDelay="1500"
            />
            </p>
        </div>
    )
};

export default HeroSection;