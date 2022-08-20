import React from 'react';
import { Box , Typography } from "@mui/material";
import {
    BackgroundImage , BackgroundImageContainer , CompanyIcon , CompanyImage , HeaderContainer , ProfileAddress ,
    ProfileHeaderContainer ,
    ProfileHeadline , ProfileImage ,
    ProfileSection2Container ,
    ProfileSectionContainer , ProfileTitleName
} from "../../styles/Profile/ProfileHeader";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link } from "react-router-dom";

function ProfileHeader ( props ){
    return (
        <>
            <HeaderContainer>
                <BackgroundImageContainer>
                    <BackgroundImage src='./images/background.jpg' alt={ 'image' }/>
                    <ProfileHeaderContainer>
                    <ProfileSectionContainer>
                        <ProfileTitleName>
                            Fraz bhatti
                        </ProfileTitleName>
                        <ProfileHeadline variant='body2'>
                            MERN STACK DEVELOPER | FRONTEND DEVELOPER | FULL STACK DEVELOPER
                        </ProfileHeadline>
                        <ProfileAddress>
                            Islamabad , Pakistan
                            <span style={{
                                paddingLeft:".5rem",
                            }}>
                                <Link to={'/profile'}>
                                    Contact info
                                </Link>
                            </span>
                        </ProfileAddress>
                        <Box sx={ { paddingTop : '1rem' , }}>
                            <Typography variant='body2' sx={ { color : 'dodgerblue' } }>
                                223 connections
                            </Typography>
                        </Box>

                    </ProfileSectionContainer>
                        <ProfileSection2Container>
                            <Box>
                                <Typography variant={'h6'}>
                                   <CompanyIcon/>
                                    Upwork
                                </Typography>

                                <Typography variant={'body2'}>
                                    <CompanyImage src={'./images/logo.jpg'} alt={'logo'} />
                                    National Univeristy of Sceince and Technology
                                </Typography>
                                </Box>
                        </ProfileSection2Container>
                    </ProfileHeaderContainer>
                </BackgroundImageContainer>
                <ProfileImage src='./images/smartContract.jpg'/>
            </HeaderContainer>


        </>
    );
}

export default ProfileHeader;