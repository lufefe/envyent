import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            { window.scrollTo({ top: 0, left: 100, behavior: 'smooth'})}
            <video autoPlay loop muted>
                <source src='/videos/video.mp4' type='video/mp4'/>
            </video>
         
        </div>
    )
};

export default HeroSection;