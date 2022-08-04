import React from 'react';
import { Box , Container , Divider , Grid , Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledLink } from "../../styles/General";
import { SectionTitle } from "../../styles/HeroSection";

function Footer ( props ) {

    return (
        <Box sx={{
            backgroundColor : '#01021f',
            color: '#fff',
            marginTop:'4rem',
            paddingBottom:'2rem'
        }}>
           <Container maxWidth='lg'>
               <Grid container spacing={5}>
               <Grid item xs={10} sm={3}>
                   <Box borderBottom={1}>
                   Connect
                   </Box>
                   <Box>
                       <StyledLink to='/' sx={{
                       }}>Home</StyledLink>
                   </Box>
                   <Box>
                       <StyledLink to='/contact'>Contact Us</StyledLink>
                   </Box>
                   <Box>
                       <StyledLink to='/'>Careers</StyledLink>
                   </Box>
               </Grid>
                   <Grid item xs={10} sm={3}>
                       <Box borderBottom={1}>
                           Explore
                       </Box>
                       <Box >
                           <StyledLink to='/'>Get Verified</StyledLink>
                       </Box>
                       <Box sx={{
                           cursor:'pointer',
                       }}>
                           <StyledLink to='/'>Soul Bound Token</StyledLink>
                       </Box>
                   </Grid>
                   <Grid item xs={10} sm={3}>
                       <Box borderBottom={1}>
                           Login
                       </Box>
                       <Box >
                           <StyledLink to='/'>NFTs</StyledLink>
                       </Box>
                       <Box >
                           <StyledLink to='/'>Get The profile</StyledLink>
                       </Box>
                   </Grid>
                   <Grid item xs={10} sm={3}>
                       <Box>
                           <SectionTitle sx={{
                               color:'white',
                               display:'block',
                               margin:'0',
                           }}>
                               Soul Bound
                           </SectionTitle>
                           <Typography variant='subtitle2' sx={{
                               color:'#00a2ff',
                           }}>
                               soulbound@gmail.com
                           </Typography>
                           <Divider flexItem='true' color='success'/>
                           Be the part of the best team!
                       </Box>
                   </Grid>
               </Grid>

           </Container>
        </Box>
    );
}

export default Footer;