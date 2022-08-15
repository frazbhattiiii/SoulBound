import React            from 'react';
import HeroSection      from "../Components/HeroSection/HeroSection";
import { HeroCurve }    from "../styles/HeroSection";
import NavBar           from "../Components/NavBar";
import ScrollComponent  from "../Components/HeroSection/Scroll1";
import { Box , Grid }   from "@mui/material";
import ScrollComponent2 from "../Components/HeroSection/Scroll2";
import Scroll3          from "../Components/HeroSection/Scroll3";
import { FlexBox }      from "../styles/General";
import ScrollComponent4 from "../Components/HeroSection/Scroll4";
import ScrollComponent5 from "../Components/HeroSection/Scroll5";
import Footer from "../Components/Footer";

function Hero ( props ) {
    return (
        <>
            <Box sx={ {
                marginBottom : "5rem" ,
            } }>

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
                <Grid item sx={ {
                    display:{xl:'block', lg:'block', md : "none",sm:'none' , xs : "none" },
                    marginTop : { xl : '20rem' , lg : "15rem" , md : "12rem" , sm : "0" , xs : "0" } ,
                    marginLeft : { xl : '20rem' , lg : "6rem"} ,
                    overflow:'hidden'
                } }>
                    <img src='/images/blocky.gif' width='420'/>
                </Grid>
            </Grid>
            <ScrollComponent4/>
            <ScrollComponent5/>
            <Footer/>
        </>
    );
}

export default Hero;