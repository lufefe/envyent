import React from 'react'
import './Vision.css';
import dashboard from '../images/dashboard.svg'

function Vision() {
    return (
        <div className="vision-container">
            <div className="vision-content">
                <div className="main-col-left">
                    <h1>Vision</h1>
                    <p>Our imagination is that of limitless possibilities. We beleive that the future we want we can create.
                        We envision a future where technology is used safely to capture and process our data, doing the work for us in every way possible.
                        Technology should be merely a means to a better society, providing us with the necessary products.
                    </p>
                    <div>
                        
                    </div>
                </div>
                <div className="main-col-right">
                    <img src={dashboard} alt="dashboard" className="main-img"/>
                </div>
            </div>
        </div>
    )
};

export default Vision;
