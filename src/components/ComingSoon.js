import React from 'react'
import './ComingSoon.css';
import '../App.css';
import back from "../images/envy_trans.png";


function ComingSoon() {
    return (
        
        <div className="coming-soon">
            <img src={back} alt="Company Logo"/>
            {/* <img src="https://res.cloudinary.com/defiantoli/image/upload/v1558057617/FCILogo_hcwuwu.png" alt="Fox Capital Investment Logo"/> */}
	<h1>Envy Enterprises (Pty) Ltd.</h1>
	<div class="flex-container">
		<h3>Healthcare</h3>
		<h3>|</h3>
		<h3>Cybersecurity</h3>
		<h3>|</h3>
		<h3>A.I</h3>
		<h3>|</h3>
		<h3>Cloud</h3>
	</div>	
	<h2>WEBSITE COMING SOON</h2>

	<p>Please contact us at info@envyenterprises.com</p>

           
        </div>
    )
}

export default ComingSoon;
