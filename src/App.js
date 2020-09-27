import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
// import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        {/* <ComingSoon/> */}
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer /> 
      </Router>
    </>
  );
}

export default App;