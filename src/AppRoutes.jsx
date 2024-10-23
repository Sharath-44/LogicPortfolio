import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/skills" element={<SkillsPage />} /> 
          <Route path="/projects" element={<ProjectsPage/>} /> 
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes> 
      </Router>
    );
  };
  
  export default AppRoutes;