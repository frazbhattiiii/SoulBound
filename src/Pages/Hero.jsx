import React from 'react';
import HeroSection from "../Components/HeroSection/HeroSection";
import { HeroCurve } from "../styles/HeroSection";
import NavBar from "../Components/NavBar";
import ScrollComponent from "../Components/HeroSection/Scroll1";
import { Box } from "@mui/material";

function Hero ( props ){
    return (
        <>
            <Box sx={{
                height:'100vh'
            }}>
            <HeroCurve sx={{
                // marginTop:'2rem',
            }}>
                <NavBar/>
            <HeroSection/>
            </HeroCurve>
            </Box>
            <ScrollComponent/>
        </>
    );
}

export default Hero;