import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
// import Philanthropy from '../Philanthropy';
import Vision from '../Vision';



function Home() {
  return (
    <>
      <HeroSection/>
      <Vision/>
      {/* <Philanthropy/> */}
      <Cards/>
    </>
  );
}

export default Home;