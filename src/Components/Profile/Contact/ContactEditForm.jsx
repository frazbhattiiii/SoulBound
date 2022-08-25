import React from 'react';
import ToastBox from "../../shared/ToastContainer";
import { Box , TextField } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { PurpleButton } from "../../../styles/Profile/ProfileHeader";
import { useDispatch , useSelector } from "react-redux";
import { saveContactInfo } from "../../../features/user/userSlice";
import { toast } from "react-toastify";
import { closeContactForm } from "../../../features/general/appSlice";

function ContactEditForm ( props ){
    const {contactInfo} = useSelector ( state => state.user );
    const [website,setWebsite] = React.useState (contactInfo.website);
    const [phone,setPhone] = React.useState (contactInfo.phone);
    const [email,setEmail] = React.useState (contactInfo.email);
    const [twitter,setTwitter] = React.useState (contactInfo.twitter);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            website,
            phone,
            email,
            twitter
        };
        console.log(data)
        toast('Contact Information Saved');
        dispatch(saveContactInfo(data));
        dispatch(closeContactForm());
    }
    return (
        <>
            <ToastBox/>
            <Box style={ {
                display : 'flex' ,
                flexDirection : "column" ,
                padding : '1rem' ,
                gap : '2'
            } }>
                <TextField id="outlined-name"
                           label="Website"
                           value={ website }
                           variant="outlined"
                           onChange={ ( e ) => setWebsite ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                           InputProps={ { startAdornment : (<LanguageIcon/>) } }
                />
                <TextField id="outlined-name"
                           label="Phone"
                           value={ phone }
                           variant="outlined"
                           type={ 'number' }
                           onChange={ ( e ) => setPhone ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                           InputProps={ { startAdornment : (<PhoneIcon/>) } }
                />
                <TextField id="outlined-name"
                           label="Email"
                           value={ email }
                           variant="outlined"
                           type={ 'email' }
                           onChange={ ( e ) => setEmail ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                           InputProps={ { startAdornment : (<EmailIcon/>) } }
                />
                <TextField id="outlined-name"
                           label="Twitter Handle"
                           value={ twitter }
                           variant="outlined"
                           onChange={ ( e ) => setTwitter ( e.target.value ) }
                           sx={ { width : '100%' , marginBottom : '1rem' } }
                           InputProps={ { startAdornment : (<TwitterIcon />) } }
                />
                <PurpleButton onClick={handleSubmit}>
                    Save Info
                </PurpleButton>
            </Box>
        </>
    );
}

export default ContactEditForm;