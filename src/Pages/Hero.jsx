import React from 'react';
import HeroSection from "../Components/HeroSection/HeroSection";
import { HeroCurve } from "../styles/HeroSection";
import NavBar from "../Components/NavBar";

function Hero ( props ){
    return (
        <>
            <NavBar/>
            <HeroCurve>

            <HeroSection/>
            </HeroCurve>
        </>
    );
}

export default Hero;