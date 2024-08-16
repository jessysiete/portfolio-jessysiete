import { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="App">
      <header><h1>JessySiete</h1>
      </header>
      <main className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
