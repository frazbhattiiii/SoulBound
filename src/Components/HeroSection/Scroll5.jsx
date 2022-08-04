import React , { useEffect } from 'react';
import { motion , useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box , Typography } from "@mui/material";
import { FlexBox , PurpleButton } from "../../styles/General";
import { ContactUsBox , ContactUsTitle , SectionTitle } from "../../styles/HeroSection";
import Button from "@mui/material/Button";
import ContactsIcon from '@mui/icons-material/Contacts';

function ScrollComponent5 ( props ) {
    const boxVariant = {
        visible : { opacity : 1 , scale : 1 , transition : { duration : 1.75 } } ,
        hidden : { opacity : 0 , scale : 0 }
    };
    const control = useAnimation ();
    const [ ref , inView ] = useInView ();
    useEffect ( () => {

        if ( inView ) {
            control.start ( "visible" );
        }
        else {
            control.start ( "hidden" );
        }
    } , [ control , inView ] );
    return (
        <>
            <Box sx={ {
                marginBottom : "2rem" ,
            } }>
                <Box
                    ref={ ref }
                    component={ motion.div }
                    variants={ boxVariant }
                    initial="hidden"
                    animate={ control }
                    sx={ {
                        overflow : 'hidden' ,
                    } }

                >

                    <FlexBox>
                        <ContactUsBox>
                            <ContactUsTitle variant='h3'>
                                Share your toughts how to improve spring Role
                            </ContactUsTitle>

                            <Typography variant="body2" sx={ {
                                color : "#fff" ,
                                marginTop : "1rem" ,
                                padding : '.5rem'
                            } }>
                                We would love to learn more about your experience so we can make our product better
                                serve you
                            </Typography>
                            <PurpleButton variant='contained'
                                          endIcon={ <ContactsIcon/> }>
                                Contact Us</PurpleButton>
                        </ContactUsBox>
                    </FlexBox>
                </Box>
            </Box>
        </>
    );
}

export default ScrollComponent5;