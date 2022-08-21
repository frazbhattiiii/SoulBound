import { createSlice } from '@reduxjs/toolkit';
import backgroundPic from '../../assets/images/backgroundImage.jpg';
import profilePic from '../../assets/images/profile.jpeg';
const initialState = {
        name:'',
        email:'',
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
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { setBackgroundImage,setProfileImage } = userSlice.actions;
export default userSlice.reducer