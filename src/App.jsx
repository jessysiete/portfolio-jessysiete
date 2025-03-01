import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main className="App-body">
        {/* <br /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
