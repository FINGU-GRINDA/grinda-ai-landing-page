import React from 'react';
import Hero from '../sections/Hero';
import SalesAgentDemo from '../sections/SalesAgentDemo';
import TrustedBy from '../sections/TrustedBy';
import WhyGrinda from '../sections/WhyGrinda';
import LatestNews from '../sections/LatestNews';
import Company from '../sections/Company';

const Home = () => {
    return (
        <>
            <Hero />
            <SalesAgentDemo />
            <TrustedBy />
            <WhyGrinda />
            <LatestNews />
            <Company />
        </>
    );
};

export default Home;
