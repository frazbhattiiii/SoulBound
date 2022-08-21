import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: {
        name:'',
        email:'',
    }
}
const userSlice = createSlice ( {
                                    name : 'user' ,
                                    initialState ,
                                    reducers : {
                                        anyAction : ( state ) => {

                                        } ,
                                    } ,
                                    extraReducers : {

                                    } ,
                                } )
export const { anyAction } = userSlice.actions;
export default userSlice.reducer