import React from 'react';
import {Box} from '@mui/material';
import { HeroContainer , HeroDescription , HeroImage , HeroTitle , ImageContainer } from "../../styles/HeroSection";
import { motion , useAnimation } from "framer-motion";
function HeroSection ( props ){
    let easing = [ 0.6 , - 0.05 , 0.01 , 0.99 ];
    const animate = {
        opacity : 1 ,
        y : 0 ,
        transition : {
            duration : 1.4,
            ease : easing ,
            delay : 0.3 ,
        } ,
    };
    const imageAnimate = {
        opacity : 1 ,
        y : 0 ,
        transition : {
            duration : 1.7 ,
            ease : easing ,
            delay : 0.5 ,
        } ,
    }
    return (
        <>
        <HeroContainer>
            <HeroTitle   component={motion.div}
                       animate={animate}
                        initial={ { opacity : 0 , y : 60 } }>
                Build Your On-Chain Proof-Of-Work Portfolio
            </HeroTitle>
            <HeroDescription component={motion.div}
                             animate={animate}
                             initial={ { opacity : 0 , y : 60 } }>
                SoulBound is a platform where professionals demonstrate their work, get verified, give tenable endorsements, get into communities, and more - everything on the blockchain!
            </HeroDescription>

        </HeroContainer>
    <ImageContainer  component={motion.div}
                     animate={imageAnimate}
                     initial={ { opacity : 0 , y : 60 } }>
        <HeroImage src='/images/BlockChain.png'/>
    </ImageContainer>

        </>
    );
}

export default HeroSection;