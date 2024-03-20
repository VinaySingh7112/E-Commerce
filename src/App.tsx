import React from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Home/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
