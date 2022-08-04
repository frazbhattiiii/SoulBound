import { Box, styled, Typography, Grid } from "@mui/material";
import { Colors }                        from "../Theme";
import "@fontsource/alata";

export const HeroContainer = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex',
        flexDirection : 'column',
        width : '30rem',
        flexWrap : 'wrap',
        marginLeft : '2rem',
        [ theme.breakpoints.down ( "md" ) ] : {
            marginLeft : "1rem",
            width : '22rem',
        },
        [ theme.breakpoints.down ( "sm" ) ] : {
            marginLeft : "1rem",
            width : '18rem',
        },
    }
) )
export const HeroCurve = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'block',
        boxSizing : 'border-box',
        height : '43rem',
        backgroundColor : Colors.primary,
        clipPath : 'ellipse(75% 100% at 25% 0%)',
        [ theme.breakpoints.down ( "md" ) ] : {
            height : "38rem",
        },
        [ theme.breakpoints.down ( "sm" ) ] : {
            height : "38rem",
        },
    }
) )

export const HeroTitle = styled ( Typography ) ( ( { theme } ) => (
    {
        color : "white",
        fontSize : "3rem",
        marginTop : "3rem",
        fontFamily : '"Alata", sans-serif',
        [ theme.breakpoints.down ( "md" ) ] : {
            fontSize : "2rem",
        }
    }
) )
export const HeroDescription = styled ( Typography ) ( ( { theme } ) => (
    {
        color : Colors.light,
        fontSize : "1.5rem",
        fontFamily : '"Alata", sans-serif',
        marginTop : '1rem',
        [ theme.breakpoints.down ( "md" ) ] : {
            fontSize : "1rem",
        },
        [ theme.breakpoints.down ( "sm" ) ] : {
            fontSize : ".75rem",
        }

    }
) )

export const ImageContainer = styled ( Box ) ( ( { theme } ) => (
    {
        [ theme.breakpoints.down ( "md" ) ] : {
            flexDirection : 'column',
            marginTop : '-2.2rem',
        },
        marginTop : '-30rem',
        // justifyContent:'flex-end',
    }
) )

export const HeroImage = styled ( "img" ) ( ( { src, theme } ) => (
    {
        src : `url(${ src })`,
        width : "30rem",
        [ theme.breakpoints.down ( "md" ) ] : {
            width : "20rem",
        },
        [ theme.breakpoints.down ( "sm" ) ] : {
            width : "18rem",
        },
    }
) );
export const ScrollBox = styled ( Box ) ( ( { theme } ) => (
    {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        alignItems : 'center',
    }
) )
export const SectionTitle = styled ( Typography ) ( ( { theme } ) => (
    {
        color : Colors.primary,
        fontSize : "2rem",
        fontFamily : '"Alata", sans-serif',
        margin : '1rem 0 0 8rem',
        [ theme.breakpoints.down ( "lg" ) ] : {
            margin : '0 0 0 2rem',
        },
        [ theme.breakpoints.down ( "md" ) ] : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            margin : '0',
        }
    }
) )
export const SectionTitle1 = styled ( Typography ) ( ( { theme } ) => (
    {
        color : Colors.primary,
        // marginLeft:'3rem',
        fontSize : '1.7rem',
        fontFamily : '"Alata", sans-serif',
        margin : '1rem 0 0 2rem',
        [ theme.breakpoints.down ( "lg" ) ] : {
            margin : '0 0 0 2rem',
        },
        [ theme.breakpoints.down ( "md" ) ] : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            margin : '0',
        }
    }
) )
export const ContactUsBox = styled ( Box ) ( ( { theme } ) => (
    {
        backgroundColor : Colors.primary,
        width : '50rem',
        height : '17rem',
        borderRadius : ".5rem",
        [ theme.breakpoints.down ( "md" ) ] : {
            width : '30rem',
            height : '22rem',
        },
        [ theme.breakpoints.down ( "sm" ) ] : {
            width : '22rem',
            height : '26rem',
        }
    }
) )
export const ContactUsTitle = styled ( Typography ) ( ( { theme } ) => (
    {
        fontFamily : '"Alata", sans-serif',
        color : "#fff",
        padding : '.5rem'
    }
) )


