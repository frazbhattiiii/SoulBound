import React , { useEffect } from 'react';
import { motion,useAnimation  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box , Divider , Grid , Typography } from "@mui/material";
import { ScrollBox , SectionTitle } from "../../styles/HeroSection";
import { FlexBox , Description , SmallImage,LargeImage } from "../../styles/General";
function ScrollComponent ( props ) {
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
                <SectionTitle>
                    No Lies on Profile Now!
                </SectionTitle>
                <ScrollBox>

                        <FlexBox sx={{
                            marginLeft:{md:'6rem'},
                        }}>
                            <SmallImage src='/images/eth.png' size='80'/>
                            <Description variant="h6">
                            SoulBound
                                is a platform where professionals demonstrate their work, get verified, give tenable endorsements, get into communities, and more - everything on the blockchain!
                            </Description>
                            <LargeImage src='/images/hero1.png' alt='about' size='500'/>
                        </FlexBox>

                </ScrollBox>
            </Box>
        </>
    );
}

export default ScrollComponent;