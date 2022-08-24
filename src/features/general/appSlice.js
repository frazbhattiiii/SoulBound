import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    imageProfileDialogue:false,
    editForm:false,
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
                                        }
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const {openEditForm,closeEditFrom,openImageProfileDialogue,closeImageProfileDialogue } = appSlice.actions;
export default appSlice.reducer