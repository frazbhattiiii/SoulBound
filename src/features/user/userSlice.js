import { createSlice } from '@reduxjs/toolkit';
import backgroundPic from '../../assets/images/backgroundImage.jpg';
import profilePic from '../../assets/images/profile.jpeg';
const initialState = {
        name:'Ahmed Fraz',
        tagline : 'MERN STACK DEVELOPER | FRONTEND DEVELOPER | FULL STACK DEVELOPER',
        location:'Islamabad',
        company:'Upwork',
        country:'Pakistan',
        education:'National Univeristy of Sceince and Technology',
        backgroundImage:backgroundPic,
        profileImage:profilePic,
}
const userSlice = createSlice ( {
                                    name : 'user' ,
                                    initialState ,
                                    reducers : {
                                        setBackgroundImage : (state,{payload}) => {
                                            state.backgroundImage = payload;
                                        } ,
                                        setProfileImage : ( state,{payload} ) => {
                                            state.profileImage = payload;
                                        },
                                        setUserInfo : (state,{payload}) => {
                                            state.name = payload.Name;
                                            state.tagline = payload.Tagline;
                                            state.location = payload.Location;
                                            state.company = payload.Company;
                                            state.country = payload.label;
                                            state.education = payload.Education;
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { setBackgroundImage,setProfileImage,setUserInfo } = userSlice.actions;
export default userSlice.reducer