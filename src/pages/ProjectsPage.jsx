import React from 'react';
import AppBar from '../components/AppBar';  
import Footer from '../components/Footer';
import VerticalAccordion from '../components/projects/verticalAccordion';

const ProjectsPage = () => {
    return (
        <div>
            <AppBar />
            <VerticalAccordion />
            <Footer />
        </div>
    );
};

export default ProjectsPage;