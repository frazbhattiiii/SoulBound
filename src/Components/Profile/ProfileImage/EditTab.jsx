import React , { useState } from 'react';
import { Box } from "@mui/material";
import { useDispatch , useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { closeImageProfileDialogue } from "../../../features/general/appSlice";
import { setProfileImage } from "../../../features/user/userSlice";
import ToastBox from "../../shared/ToastContainer";
import { toast } from "react-toastify";

function EditTab ( props ){
    const { profileImage } = useSelector ( state => state.user );
    const [ file , setFile ] = useState ( '' );
    const dispatch = useDispatch ();
    const handleChange = ( e ) => {
        const file = e.target.files[ 0 ];
        if ( file ) {
            setFile ( file );
            dispatch ( setProfileImage ( URL.createObjectURL ( file ) ) )
        }
    }
    const uploadImage = () => {
        toast('Profile Image Updated');
        dispatch ( closeImageProfileDialogue () );
        dispatch ( setProfileImage ( URL.createObjectURL ( file ) ) )
    }
    return (
        <>
            <ToastBox/>
            <Box sx={ {
                display : 'flex' ,

            } }>
                <Box sx={ {
                    width : '100%' ,
                    display : 'flex' ,
                    justifyContent : 'center' ,
                    alignItems : 'center' ,
                    padding : '1rem' ,
                } }>
                    <img src={ profileImage } style={ {
                        width : '11rem' ,
                        height : '11rem' ,
                        borderRadius : '50%' ,
                        border : '1px solid #e6e6e6' ,
                        objectFit : 'cover' ,
                    } } alt={ 'Profile Image' }/>
                </Box>
            </Box>
            <Box sx={ {
                display : 'flex' ,
                flexDirection : 'column' ,
                flexWrap : 'wrap' ,
            } }>
                <Box sx={ {
                    width : '100%' ,
                    display : 'flex' ,
                    justifyContent : 'center' ,
                    alignItems : 'center' ,
                    padding : '1rem' ,
                } }>
                    <input type="file" onChange={ handleChange }/>
                </Box>
                <Button variant={ 'contained' } color={ 'primary' } onClick={ uploadImage }>
                    Upload
                </Button>

            </Box>
        </>
    );
}


export default EditTab;