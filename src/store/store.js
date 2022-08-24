import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice';
import appReducer from '../features/general/appSlice';
const store = configureStore({
                                 reducer: {
                                     user: userReducer,
                                     app:appReducer,
                                 }
                             })
export default store