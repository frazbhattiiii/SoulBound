import React , { useEffect } from 'react';
import { motion,useAnimation  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box , Divider , Grid , Typography } from "@mui/material";
import { ScrollBox , SectionTitle } from "../../styles/HeroSection";
import { FlexBox , Description , SmallImage,LargeImage } from "../../styles/General";
function ScrollComponent2 ( props ) {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1.75 } },
        hidden: { opacity: 0, scale: 0 }
    };
    const control = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {

        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <>
            <Box sx={{
                backgroundColor:"aliceblue",
                marginBottom:"5rem",
            }}>
            <Box
                ref={ref}
                component={motion.div}
                variants={boxVariant}
                initial="hidden"
                animate={control }
                sx={{
                    overflow: 'hidden',
                }}

            >

                    <FlexBox>
                    <LargeImage src='/images/robo.gif' alt='about' size='500'/>
                    </FlexBox>
                    <FlexBox sx={{
                        marginBottom:"2rem"
                    }}>

                        <SmallImage src='/images/eth.png' size='80'/>
                     <FlexBox sx={{
                         flexDirection:"column",
                         flexWrap:'wrap',
                         width:{xs:'100%'},

                         margin:'auto'
                     }}>
                        <SectionTitle component='span'>
                            Complete your profile and get NFTs
                        </SectionTitle>
                        <Description variant="h6" component='span' sx={{
                            width:'22rem',
                        }}>
                            NFTs are not just jpegs. They give the ability to assign ownership of any unique piece of digital data and can act as a professional certificate of authenticity. On SpringRole, you get an NFT for every section you fill.
                           </Description>
                     </FlexBox>
                    </FlexBox>
            </Box>
            </Box>
        </>
    );
}

export default ScrollComponent2;