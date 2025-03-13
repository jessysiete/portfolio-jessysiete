import { useState } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ProjectsPage from '../Projects/ProjectsPage';

export default function App() {
  return (
    <>
      <Header />
    <main className="App-body">
      <Routes>
      <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      </main>
      </>
  );
};

