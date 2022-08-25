import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@mui/material";
import { useDispatch , useSelector } from "react-redux";
import EditButton from "../../shared/EditButton";
import { ContactContainer , InfoContainer } from "../../../styles/Profile/ProfileHeader";
import { closeContactInformation , openContactForm } from "../../../features/general/appSlice";
function ContactInfo ( props ){
    const { contactInfo } = useSelector ( state => state.user );
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(closeContactInformation());
        dispatch(openContactForm());
    }
    return (
       <>

       <ContactContainer>
          <InfoContainer>
              <LanguageIcon/> &nbsp; {contactInfo.website}
          </InfoContainer>
           <InfoContainer>
               <PhoneIcon/> &nbsp; {contactInfo.phone}
           </InfoContainer>
           <InfoContainer>
               <EmailIcon/> &nbsp; {contactInfo.email}
           </InfoContainer>
           <InfoContainer>
               <TwitterIcon/> &nbsp; {contactInfo.twitter}
           </InfoContainer>
           <Box
               onClick={handleClick}
               sx={{ display:'flex', marginTop:"-2rem", marginLeft:'auto' }}>
           <EditButton/>
           </Box>
       </ContactContainer>

       </>
    );
}

export default ContactInfo;