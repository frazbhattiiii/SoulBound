import React , { useState } from 'react';
import { Box , IconButton , Typography } from "@mui/material";
import {
    BackgroundImage , BackgroundImageContainer , CompanyIcon , CompanyImage , HeaderContainer , ProfileAddress ,
    ProfileHeaderContainer ,
    ProfileHeadline , ProfileImage ,
    ProfileSection2Container ,
    ProfileSectionContainer , ProfileTitleName
} from "../../styles/Profile/ProfileHeader";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import backgroundImagePic from '../../assets/images/backgroundImage.jpg';
import profilePic from '../../assets/images/profile.jpeg';
function ProfileHeader ( props ){
    const [ openCrop , setOpenCrop ] = useState ( false );
    const [backgroundImage, setBackgroundImage] = useState ( backgroundImagePic );
    const [profileImage, setProfileImage] = useState ( profilePic );
    const [ file , setFile ] = useState ( null );
    const [ photoURL , setPhotoURL ] = useState ( '' );
    const handleChange = ( e ) => {
        const file = e.target.files[ 0 ];
        if ( file ) {
            setFile ( file );
            console.log(file)
            setBackgroundImage(URL.createObjectURL(file));
            setPhotoURL ( URL.createObjectURL ( file ) );
            setOpenCrop ( true );
        }
    };
    const handleProfilePicture =()=>{

    }
    return (
        <>
            <HeaderContainer>
                <BackgroundImageContainer>
                    <Box className='container'>
                        <BackgroundImage src={backgroundImage} alt={ 'image' }/>
                        <Box className="overlay">
                            <Stack direction="column" alignItems="center" spacing={2}>
                                <IconButton color="primary" aria-label="upload picture" component="label" sx={{
                                    color:'white',
                                }}>
                                    <input hidden accept="image/*" type="file" onChange={handleChange}/>
                                    <PhotoCamera />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
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
                                <span style={ { paddingLeft : ".5rem" } }>
                                <Link to={ '/profile' }>
                                    Contact info
                                </Link>
                            </span>
                            </ProfileAddress>
                            <Box sx={ { paddingTop : '1rem' , } }>
                                <Typography variant='body2' sx={ { color : 'dodgerblue' } }>
                                    223 connections
                                </Typography>
                            </Box>

                        </ProfileSectionContainer>
                        <ProfileSection2Container>
                            <Box>
                                <Typography variant={ 'h6' }>
                                    <CompanyIcon/>
                                    Upwork
                                </Typography>

                                <Typography variant={ 'body2' }>
                                    <CompanyImage src={ './images/logo.jpg' } alt={ 'logo' }/>
                                    National Univeristy of Sceince and Technology
                                </Typography>
                            </Box>
                        </ProfileSection2Container>
                    </ProfileHeaderContainer>
                </BackgroundImageContainer>
                <ProfileImage src={profilePic} onClick={handleProfilePicture}/>
            </HeaderContainer>
        </>
    );
}

export default ProfileHeader;