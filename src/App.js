import { useState } from 'react';
import About from './components/about/About';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import SEO from './components/Seo';
import Experiences from './components/experiences/Experiences';

function App() {

  return (
    <div className='app'>
      <SEO />
      <NavBar />
      <About />
      {/* <Experiences /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
