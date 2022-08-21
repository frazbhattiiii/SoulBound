import React , { useEffect }                               from 'react';
import { motion , useAnimation }                           from "framer-motion";
import { useInView }                                       from "react-intersection-observer";
import { Box , Divider , Grid , Typography }               from "@mui/material";
import { FlexBox , Description , SmallImage , LargeImage } from "../../styles/General";
import CustomCard                                          from "../shared/Card";
import { SectionTitle } from "../../styles/HeroSection";

function ScrollComponent4 ( props ) {
    const data = [
        {
            title : "Show the real you" ,
            detail : "You are more than your resume. Your accomplishments and interests might not fit in the conventional professional websites because you tailor yourself to fit in. Springrole lets you portray the real you and connect with people who share similar interests." ,
            image : "/images/power.png"
        } ,
        {
            title : "Get Meaningful Endorsements" ,
            detail : "Your endorsements are ranked by the reputation of people endorsing you. Say goodbye to endorsements that are meaningless and trustless" ,
            image : "/images/endorsement.png"
        } ,
        {
            title : "Get Noticed by potential Employers" ,
            detail : "A verified profile slashes any second thoughts on the legitimacy of the candidate’s information making it easier for employers to hire qualified candidates quickly." ,
            image : "/images/searchIcon.png"
        } ,
        {
            title : "Import your NFTs" ,
            detail : "You can import your public NFTs by connecting your web3 wallet. Your entire NFT collection in one place. Showcase to your circle and receive free NFTs from SpringRole by verifying your profile on blockchain." ,
            image : "/images/eth.png"
        } ,
    ]
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
                backgroundColor : "aliceblue" ,
                marginBottom : "5rem" ,
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
                    <SectionTitle>
                        Why SoulBound?
                    </SectionTitle>

                    <FlexBox sx={ {
                        marginTop : "2rem"
                    } }>
                        { data.map ( ( item , index ) => {
                            return (
                                <CustomCard key={ index } title={ item.title } detail={ item.detail }
                                            image={ item.image }/>
                            )
                        } ) }
                    </FlexBox>
                </Box>
            </Box>
        </>
    );
}

export default ScrollComponent4;