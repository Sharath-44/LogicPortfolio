import React from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import SwipeCards from '../components/SwipeCards';
import { RevealBento } from '../components/RevealBento';
import { Example } from '../components/BlockInTextCard';
import CircleOverlay from '../components/CircleOverlay';
import Education from '../components/Education';



const HomePage = () => {
    return (
        <div>
            <AppBar />

            <ProfileCard />
            <RevealBento />
            <SwipeCards />
            <CircleOverlay />
            <Education />
            <Example />
            
            <Footer />
        </div>
    );
};

export default HomePage;
