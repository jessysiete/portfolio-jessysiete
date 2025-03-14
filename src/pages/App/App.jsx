import { useState } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProjectsPage from '../Projects/ProjectsPage';
import HomePage from '../Home/HomePage';

export default function App() {
  return (
    <>
      <Header />
    <main className="App-body">
      <Routes>
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      </main>
      </>
  );
};

