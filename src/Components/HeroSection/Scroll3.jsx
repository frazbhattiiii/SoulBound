import React from "react";
import { useState } from "react";
import { motion , AnimateSharedLayout , AnimatePresence } from "framer-motion";
import { Description , FlexBox } from "../../styles/General";
import { Box , Typography } from "@mui/material";
import { SectionTitle } from "../../styles/HeroSection";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Scroll3 () {
    return (
        <>
            <SectionTitle sx={ {
                marginBottom : { xl : '0' , lg : '0' , md : '0' , sm : '1rem' , xs : '1rem' } ,
            } }>
                How does it work?
            </SectionTitle>
            <Box sx={ {
                display : 'flex' ,
                justifyContent : "flex-start" ,
                alignItems : 'center' ,
                marginLeft:{xl: '11rem',lg: '11rem',md:'8rem',sm:'5rem',xs:'3rem'} ,
            } }>
                <AnimateSharedLayout>
                    <motion.ul layout initial={ { borderRadius : 25 } }>
                        { titles.map ( ( item , index ) => (
                            <Item key={ index } title={ item.title } index={ index + 1 } avatarPath={ item.avatarPath }
                                  description={ item.description }/>
                        ) ) }
                    </motion.ul>
                </AnimateSharedLayout>
            </Box>
        </>
    );
}

function Item ( props ) {
    const [ isOpen , setIsOpen ] = useState ( false );

    const toggleOpen = () => setIsOpen ( ! isOpen );
    console.log ( props.avatarPath )

    return (
        <>
            <Box sx={ {
                marginTop : '2rem' ,
                marginLeft : { md : '0' , sm : '-2rem' , xs : '-2rem' } ,
                width : { md : '30rem' , sm : '24rem', xs:'22rem' } ,
            } }>
                <motion.li layout onClick={ toggleOpen } initial={ { borderRadius : 10 } }>
                    <motion.img className="avatar" layout src={ props.avatarPath }/>
                    <Description sx={ {
                        color : "darkgreen" ,
                        fontSize : '1.25rem' ,
                        margin : '1rem 0 .25rem 0' ,
                    } }>{ props.index }. { props.title }</Description>
                    <AnimatePresence>{ isOpen && <Content content={ props.description }/> }</AnimatePresence>
                </motion.li>
            </Box>
        </>

    );
}

function Content ( props ) {
    return (
        <motion.div
            layout
            initial={ { opacity : 0 } }
            animate={ { opacity : 1 } }
            exit={ { opacity : 0 } }
        >
            <Typography variant='subtitle2' color='purple'>
                { props.content }
            </Typography>
        </motion.div>
    );
}

const titles = [
    {
        title : "Sign Up" ,
        avatarPath : "/images/logo.jpg" ,
        description : "Sign up your account with metamask wallet" ,
    } ,
    {
        title : "Import your data" ,
        avatarPath : "/images/smartContract.jpg" ,
        description : "Import your data from the LinkedIn profile" ,
    } ,
    {
        title : "Write on block Chain" ,
        avatarPath : "/images/BlockChain.png" ,
        description : "Write Data on the block chain and get your token" ,
    } ,
    {
        title : "Share your Profile" ,
        avatarPath : "/images/share.jpg" ,
        description : "Share your web3 profile with your friends and company and no one can doubt your credibility" ,
    } ,
];
