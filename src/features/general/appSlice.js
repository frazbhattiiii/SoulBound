import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    imageProfileDialogue:false,
    editForm:false,
    contactForm:false,
    contactInformation:false,
}
const appSlice = createSlice ( {
                                    name : 'app/general' ,
                                    initialState ,
                                    reducers : {
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
                                        },
                                        openContactForm : ( state ) => {
                                            state.contactForm = true;
                                        },
                                        closeContactForm : ( state ) => {
                                            state.contactForm = false;
                                        },
                                        openContactInformation : ( state ) => {
                                            state.contactInformation = true;

                                        },
                                        closeContactInformation : ( state ) => {
                                            state.contactInformation = false;
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const {openEditForm,closeEditFrom,openImageProfileDialogue,closeImageProfileDialogue,
    openContactForm,closeContactForm,
openContactInformation, closeContactInformation
} = appSlice.actions;
export default appSlice.reducer