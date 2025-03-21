import { useState } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import HomePage from '../Home/HomePage';
import PantoneProjectPage from '../ProjectDetailPage/PantonePage/PantoneProjectPage';
import PinternProjectPage from '../ProjectDetailPage/PinternPage/PinternProjectPage';


export default function App() {
  return (
    <>
      <Header />
    <main className="App-body">
      <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/pantone14k" element={<PantoneProjectPage />} />
      <Route path="/projects/the-pintern" element={<PinternProjectPage />} />
      </Routes>
      </main>
      </>
  );
};

