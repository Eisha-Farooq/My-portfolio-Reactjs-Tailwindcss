import React from 'react';
import backgroundVideo from './assets/portfolio-background.mp4';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects'; 
import Skills from './components/Skills'; 
import Experience from './components/Resume/Resume'; 
import Contact from './components/Contact/Contact';
import StarsCanvas from './components/StarsCanvas'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      {/* Full height background video */}
      <div className="absolute inset-0 w-full h-[150vh] -top-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        
      </div>

      {/* Content over the background video */}
      <div className="relative z-10">
        {/* Stars background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <StarsCanvas />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <Navbar />
          <Projects />
          <Skills />
          <Experience />
          <Contact/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
