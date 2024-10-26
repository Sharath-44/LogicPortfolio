import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import EventManagementApp from './pages/EventManagementApp';
import RealTimeTempFlow from './pages/RealTimeTempFlow';
import MusicRecommender from './pages/MusicRecommender';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/skills" element={<SkillsPage />} /> 
                <Route path="/projects" element={<ProjectsPage />} /> 
                <Route path="/contact" element={<ContactPage />} /> 
                <Route path="/projects/event-management-app" element={<EventManagementApp />} /> 
                <Route path="/projects/realtime-tempflow" element={<RealTimeTempFlow />} /> 
                <Route path="/projects/movement-based-music-recommender" element={<MusicRecommender />} /> 
            </Routes> 
        </Router>
    );
};

export default AppRoutes;
