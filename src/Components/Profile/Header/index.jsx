import React from 'react';
import NavBar from "../../NavBar";
import ProfileHeader from "./ProfileHeader";
import EditProfileForm from "./EditProfileForm";
import ImageChangeDialogue from "../ProfileImage/ProfileDialouge";
import Contact from "../Contact";

function ProfileComponent ( props ){
    return (
        <>
            <NavBar/>
            <ProfileHeader/>
            <EditProfileForm/>
            <ImageChangeDialogue/>
            <Contact/>
        </>
    );
}

export default ProfileComponent;