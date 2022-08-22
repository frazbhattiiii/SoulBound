import { Box , IconButton , styled , Typography } from "@mui/material";
import { Colors } from "../Theme";
import Button from "@mui/material/Button";
import "@fontsource/alata";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const HeaderContainer = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex' ,
        flexDirection : 'column' ,
        width : '80%' ,
        margin:"2rem auto" ,
        [ theme.breakpoints.down ( "md" ) ] : {
           width:'100%',
              margin:'0 1rem 0 0'
        } ,
    }
) )
export const BackgroundImageContainer = styled ( Box ) ( ( { theme } ) => (
    {
        margin : '0 2rem' ,
        padding : "0" ,
        width : 'auto' ,
        display : 'flex' ,
        boxShadow : '0px 0px 10px rgba(0,0,0,0.3)' ,
        flexDirection : 'column' ,
        backgroundColor : '#fff' ,
    }
) );
export const BackgroundImage = styled ( "img" ) ( ( { theme } ) => (
    {
        width : '100%' ,
        height : '12rem' ,
        objectFit : 'cover' ,
        opacity : '1' ,
        cursor:'pointer',
        '&:hover' : {
            cursor : 'pointer' ,
            opacity:   '0.2' ,
        },
    }
) );
export const ProfileImage = styled ( "img" ) ( ( { theme } ) => (
    {
        width : '9rem' ,
        height : '9rem' ,
        borderRadius : '5rem' ,
        backgroundColor : 'black' ,
        position : 'absolute' ,
        marginLeft : '3rem' ,
        marginTop : '5.5rem' ,
        border : '.15rem solid white' ,
        objectFit : 'cover' ,
        cursor:'pointer',
    }
) );
export const ProfileHeaderContainer = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex' ,
        flexDirection : 'row',
        flexWrap: 'wrap' ,
    }
) );
export const ProfileSectionContainer = styled ( Box ) ( ( { theme } ) => (
    {
        margin : '3rem 0 0 2rem' ,
        [ theme.breakpoints.down ( "md" ) ] : {
            margin : '3rem 0 0 1rem' ,
        } ,
    }
) );
export const ProfileTitleName = styled ( Box ) ( ( { theme } ) => (
    {
        fontSize:'1.5rem',
        fontWeight:'400',
    }
) );
export const ProfileHeadline = styled ( Box ) ( ( { theme } ) => (
    {
        color:"brown"
    }
) );
export const ProfileAddress = styled ( Box ) ( ( { theme } ) => (
    {
        color : "darkslategray" ,
        paddingTop : '.5rem' ,
    }
) );
export const ProfileSection2Container= styled ( Box ) ( ( { theme } ) => (
    {
        margin : '2rem 2rem' ,
        display : 'flex' ,
        flexDirection : 'row' ,
        alignItems : 'center' ,
        justifyContent : 'flex-start' ,
    }
) );
export const CompanyImage = styled ( "img" ) ( ( { theme } ) => (
    {
        width : '30px',
        paddingTop:'.25rem',
        [ theme.breakpoints.down ( "lg" ) ] : {
            display:'none',
        }
    }
) );
export const CompanyIcon = styled ( ApartmentIcon ) ( ( { theme } ) => (
    {
        width : '30px',
        color : 'dodgerblue',
        [ theme.breakpoints.down ( "lg" ) ] : {
            display:'none',
        }
    }
) );