import { useState } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import HomePage from '../Home/HomePage';
// import GitHubPage from '../GitHub/GitHubPage';
// import ResumePage from '../Resume/ResumePage';
import PantoneProjectPage from '../ProjectDetailPage/PantonePage/PantoneProjectPage';
import PinternProjectPage from '../ProjectDetailPage/PinternPage/PinternProjectPage';
import SimonProjectPage from '../ProjectDetailPage/SimonPage/SimonProjectPage';
// 

export default function App() {
  return (
    <>
    <main className="App-body">
      <Header />
      <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Navigate to="/#projects" replace />}/>
      <Route path="/projects/pantone14k" element={<PantoneProjectPage />} />
      <Route path="/projects/the-pintern" element={<PinternProjectPage />} />
      <Route path="/projects/virtual-simon" element={<SimonProjectPage />} />
      {/* <Route path="/github" element={<GitHubPage />} /> */}
      {/* <Route path="/resume" element={<ResumePage />} /> */}
      </Routes>
      <Footer />
      </main>
      </>
  );
};

