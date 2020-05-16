import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="main">
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
