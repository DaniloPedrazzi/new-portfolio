import React from 'react';

import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio.jsx'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
