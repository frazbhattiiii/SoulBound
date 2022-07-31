import React from 'react';
import HeroSection from "../Components/HeroSection/HeroSection";
import { HeroCurve } from "../styles/HeroSection";
import NavBar from "../Components/NavBar";
import ScrollComponent from "../Components/HeroSection/Scroll1";
import { Box , Grid } from "@mui/material";
import ScrollComponent2 from "../Components/HeroSection/Scroll2";
import Scroll3 from "../Components/HeroSection/Scroll3";
import { FlexBox } from "../styles/General";

function Hero ( props ){
    return (
        <>
            <Box sx={{
                height:'100vh'
            }}>

            <HeroCurve>
                <NavBar/>
            <HeroSection/>
            </HeroCurve>
            </Box>
            <ScrollComponent/>
            <ScrollComponent2/>
            <Grid container>
                <Grid item>
            <Scroll3/>
                </Grid>
                <Grid item sx={{
                    paddingRight:{md:"0",xs:"3rem"},
                    marginTop:{xl:'20rem',lg:"15rem",md:"12rem",sm:"0",xs:"0"},
                }}>
                <img src='/images/blocky.gif' width='420'/>

                </Grid>
            </Grid>

        </>
    );
}

export default Hero;