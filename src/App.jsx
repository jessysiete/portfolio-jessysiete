import { useState } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Contact from './components/contact/contact';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main className="App-body">
        {/* <br /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
