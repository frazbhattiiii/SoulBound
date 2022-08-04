import { Box , styled , Typography , Button } from "@mui/material";
import { Colors }                             from "../Theme";
import { Link } from "react-router-dom";

export const FlexBox = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex' ,
        flexDirection : 'row' ,
        flexWrap : 'wrap' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,

        [ theme.breakpoints.down ( "md" ) ] : {
            flexDirection : 'column' ,
        }
    }
) )
export const Description = styled ( Typography ) ( ( { theme } ) => (
    {
        color : Colors.light ,
        fontSize : "1rem" ,
        width : '25rem' ,
        fontFamily : '"Alata", sans-serif' ,
        marginLeft : '1rem' ,

    }
) )
export const SmallImage = styled ( "img" ) ( ( { src , size , theme } ) => (
    {
        width : parseInt ( size ) ,
        [ theme.breakpoints.down ( "lg" ) ] : {
            width : size - 40 ,
        }

    }
) )
export const LargeImage = styled ( "img" ) ( ( { src , size , theme } ) => (
    {
        width : parseInt ( size ) ,
        [ theme.breakpoints.down ( "md" ) ] : {
            width : size - 100 ,
        }

    }
) )

export const PurpleButton = styled ( Button ) ( ( { src , size , theme } ) => (
    {
        backgroundColor : 'purple' ,
        cursor : 'pointer' ,
        color : 'white' ,
        marginTop : '1rem' ,
        fontSize : "1.2rem" ,
        marginLeft : '1rem' ,
    }
) )
export const StyledLink = styled ( Link ) ( ( {  theme } ) => (
    {
        color : 'white' ,
        textDecoration : 'none' ,
        cursor:'pointer',
        '&:hover': {
            color: 'blue',
        },
        '&:active': {
            color: 'red',
        },
    }
) )