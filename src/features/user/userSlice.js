import { createSlice } from '@reduxjs/toolkit';
import backgroundPic from '../../assets/images/backgroundImage.jpg';
import profilePic from '../../assets/images/profile.jpeg';
const initialState = {
        name:'',
        email:'',
        backgroundImage:backgroundPic,
        profileImage:profilePic,
    imageProfileDialogue:false,
        editForm:false,
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
                                        openEditForm : ( state ) => {
                                            state.editForm = true;
                                        },
                                        closeEditFrom : ( state) => {
                                            state.editForm = false;
                                        },
                                        openImageProfileDialogue : ( state ) => {
                                            state.imageProfileDialogue = true;

                                        },
                                        closeImageProfileDialogue : ( state ) => {
                                            state.imageProfileDialogue = false;
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { setBackgroundImage,setProfileImage,openEditForm,closeEditFrom,openImageProfileDialogue,closeImageProfileDialogue } = userSlice.actions;
export default userSlice.reducer