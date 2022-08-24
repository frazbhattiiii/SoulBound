import React , { useState } from 'react';
import { Box , Grid , IconButton , Typography } from "@mui/material";
import {
    BackgroundImage , BackgroundImageContainer , ButtonContainer , CompanyIcon , CompanyImage , HeaderContainer ,
    OpenToButton , OutlinedButton ,
    ProfileAddress ,
    ProfileHeaderContainer ,
    ProfileHeadline , ProfileImage ,
    ProfileSection2Container ,
    ProfileSectionContainer , ProfileTitleName
} from "../../../styles/Profile/ProfileHeader";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch , useSelector } from "react-redux";
import {
    setBackgroundImage , setProfileImage
} from "../../../features/user/userSlice";
import { openEditForm , openImageProfileDialogue } from "../../../features/general/appSlice";
import Button from "@mui/material/Button";
import EditButton from "../../shared/EditButton";
import { EditButtonContainer } from "../../../styles/General";


function ProfileHeader ( props ){
    const dispatch = useDispatch ();
    const [ openCrop , setOpenCrop ] = useState ( false );
    const {
        backgroundImage , profileImage , name , location , company , country , tagline , education
    } = useSelector ( state => state.user );
    const [ file , setFile ] = useState ( null );
    const [ photoURL , setPhotoURL ] = useState ( '' );
    const handleChange = ( e ) => {
        const file = e.target.files[ 0 ];
        if ( file ) {
            setFile ( file );
            console.log ( file );
            dispatch ( setBackgroundImage ( URL.createObjectURL ( file ) ) )
            setPhotoURL ( URL.createObjectURL ( file ) );
            setOpenCrop ( true );
        }
    };
    const handleProfilePicture = ( e ) => {
        dispatch ( openImageProfileDialogue () );
    }
    return (
        <>
            <HeaderContainer>
                <BackgroundImageContainer>
                    <Box className='container'>
                        <BackgroundImage src={ backgroundImage } alt={ 'image' }/>
                        <Box className="overlay">
                            <Stack direction="column" alignItems="center" spacing={ 2 }>
                                <IconButton color="primary" aria-label="upload picture" component="label" sx={ {
                                    color : 'white' ,
                                } }>
                                    <input hidden accept="image/*" type="file" onChange={ handleChange }/>
                                    <PhotoCamera/>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                    <ProfileHeaderContainer>
                        <Grid>
                            <Grid item>
                                <ProfileSectionContainer>
                                    <ProfileTitleName>
                                        { name }
                                    </ProfileTitleName>
                                    <ProfileHeadline variant='body2'>
                                        { tagline }
                                    </ProfileHeadline>
                                    <ProfileAddress>
                                        { location } , <span
                                        style={ { color : 'green' , fontStyle : 'italic' } }>{ country }</span>
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
                            </Grid>
                            <Grid item>
                                <ProfileSection2Container>
                                    <Box>
                                        <Typography variant={ 'h6' }>
                                            <CompanyIcon/>
                                            { company }
                                        </Typography>

                                        <Typography variant={ 'body2' }>
                                            <CompanyImage src={ './images/logo.jpg' } alt={ 'logo' }/>
                                            { education }
                                        </Typography>
                                    </Box>
                                    <EditButtonContainer onClick={ () => dispatch ( openEditForm () ) }>
                                        <EditButton/>
                                    </EditButtonContainer>
                                </ProfileSection2Container>
                            </Grid>
                        </Grid>
                    </ProfileHeaderContainer>
                    <ButtonContainer>
                        <OpenToButton>
                            Open to
                        </OpenToButton>
                        <OutlinedButton variant={ 'outlined' }>
                            Add Profile Section
                        </OutlinedButton>
                    </ButtonContainer>
                </BackgroundImageContainer>
                <ProfileImage src={ profileImage } onClick={ handleProfilePicture }/>
            </HeaderContainer>
        </>
    );
}

export default ProfileHeader;