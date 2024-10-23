import React from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import SwipeCards from '../components/SwipeCards';
import { RevealBento } from '../components/RevealBento';
import { Example } from '../components/BlockInTextCard';



const HomePage = () => {
    return (
        <div>
            <AppBar />

            <ProfileCard />
            <RevealBento />
            <SwipeCards />
            <Example />
            <Footer />
        </div>
    );
};

export default HomePage;
