import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main className="App-body">
        {/* <br /> */}
      </main>
    </div>
  );
};

export default App;
