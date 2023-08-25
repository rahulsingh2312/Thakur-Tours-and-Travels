import './App.css';
import Hero from './components/Hero';
import React from 'react';
import Navbar from './components/navbar';
import Posts from './components/Posts';

function App() {
  return (
    <div>
      <Navbar />
      {/* Other components */}
      <Hero />
      <Posts />
    </div>
  );
}

export default App;
