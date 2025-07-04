import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AgentShowcase from './components/AgentShowcase';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AgentShowcase />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;