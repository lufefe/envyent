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
                text = {["Reimagine a world where you are in a symbiotic relationship with technology ...", "a world where your data exclusively belongs to you and you have full control of it...","a world formed on trust and security between user and computer." ,"That's the code we live by at Envy Enterprises - The World ReImagined."]}
                speed="90"
                eraseDelay="4000"
                typingDelay="1500"
            />
            </p>
        </div>
    )
};

export default HeroSection;